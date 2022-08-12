import React, { Component } from "react";
import { ContextValues, MovingBoxContext, Rect } from "./MovingBoxContext";

type Option<T> = T | null;

type From = {
  xDelta: number;
  yDelta: number;
  widthRatio: number;
  heightRatio: number;
}

type MovingBoxProps = {
  children?: React.ReactNode;
  from?: From;
  fromFade?: boolean;
  debugName?: string;
  animKey?: string;
  as?: React.ElementType;
} & React.HTMLAttributes<any>;

export class MovingBox extends Component<MovingBoxProps> {
  static contextType = MovingBoxContext;
  declare context: ContextValues;

  box: Option<HTMLElement> = null;

  constructor(props: MovingBoxProps) {
    super(props);
  }

  private log(...messages: any[]): void {
    if (!this.props.debugName) return;

    console.log(this.props.debugName, ...messages);
  }

  getSnapshotBeforeUpdate(prevProps: MovingBoxProps, prevState: unknown): Option<Rect> {
    if (!this.box) {
      return null;
    }
    const { x, y, width, height } = this.box.getBoundingClientRect();

    this.log("snapshot", { x, y, width, height });

    return {
      x,
      y,
      width,
      height,
    };
  }

  componentDidUpdate(
    _prevProps: MovingBoxProps,
    _prevState: unknown,
    oldRect: ReturnType<MovingBox['getSnapshotBeforeUpdate']>
  ) {
    if (!this.box || !oldRect) {
      console.warn("componentDidUpdate invokes without defined box");
      return;
    }
    const { x, y, width, height } = this.box.getBoundingClientRect();
    const newRect = { x, y, width, height };

    this.log("update", { x, y, width, height });
    this.playFromPrevRect(oldRect, newRect);
  }

  private playFromPrevRect(oldRect: Rect, newRect: Rect) {
    const [widthRatio, heightRatio, xDelta, yDelta] = [
      oldRect.width / newRect.width,
      oldRect.height / newRect.height,
      oldRect.x - newRect.x,
      oldRect.y - newRect.y,
    ];

    this.playAnimation(
      {
        widthRatio,
        heightRatio,
        xDelta,
        yDelta,
      },
      false
    );
  }

  componentDidMount() {
    this.log("mount")
    if (this.props.animKey && this.context.rects[this.props.animKey] && this.box) {
      const prevRect = this.context.rects[this.props.animKey];
      const rect = this.box.getBoundingClientRect();
      const { x, y, width, height } = rect;
      const newRect = this.context.rects[`${this.props.animKey}--new`] || {
        x,
        y,
        width,
        height,
      };

      this.context.update(`${this.props.animKey}--new`, newRect);

      this.log('didMount', prevRect, newRect)
      this.playFromPrevRect(prevRect, newRect);
    } else {
      if (!this.props.from && !this.props.fromFade) {
        return;
      }

      this.playAnimation(this.props.from, this.props.fromFade ?? false);
    }
  }

  playAnimation(
    from: From = { widthRatio: 1, heightRatio: 1, xDelta: 0, yDelta: 0 },
    isFade: boolean
  ) {
    if (!this.box) {
      console.warn('Trying to play animation without defined box');
      return;
    }
    this.log("animation start", from);
    const { widthRatio, heightRatio, xDelta, yDelta } = from;

    const newState = "scale(1, 1) translate(0, 0)";
    const oldState = `scale(${widthRatio}, ${heightRatio}) translate(${
      xDelta / widthRatio
    }px, ${yDelta / heightRatio}px) `;

    this.box.style.transform = oldState;
    this.box.style.transformOrigin = "top left";
    this.box.style.transition = "";

    if (isFade) {
      this.box.style.opacity = "0";
    }

    window.requestAnimationFrame(() => {
      if (!this.box) {
        console.warn('Somehow box is not available in new animation frame after running playAnimation function');
        return;
      }
      this.box.style.transform = newState;
      this.box.style.opacity = "1";
      this.box.style.transition = "transform 0.2s linear, opacity 0.2s linear";
    });
  }

  componentWillUnmount() {
    if (!this.props.animKey || !this.box) return;
    const { x, y, width, height } = this.box.getBoundingClientRect();
    this.log("unmount", { x, y, width, height });
    this.context.update(this.props.animKey, {
      x,
      y,
      width,
      height,
    });
  }

  render() {
    const ComponentName = this.props.as ?? "div";
    const { from, fromFade, debugName, animKey, ...rest } = this.props;

    return (
      <ComponentName
        ref={(el: HTMLElement | null) => {
          this.box = el;
        }}
        {...rest}
      />
    );
  }
}
