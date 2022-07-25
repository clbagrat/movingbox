import React, { Component } from "react";
import { MovingBoxContext } from "./MovingBoxContext";

type Option<T> = T | null;

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
}

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
  declare context: React.ContextType<typeof MovingBoxContext>;

  box: Option<HTMLElement> = null;

  constructor(props: MovingBoxProps) {
    super(props);
  }

  private log(...messages: any[]): void {
    if (!this.props.debugName) return;

    console.log(this.props.debugName, ...messages);
  }

  getSnapshotBeforeUpdate(prevProps: MovingBoxProps, prevState: unknown): Rect {
    const { x, y, width, height } = this.box!.getBoundingClientRect();

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
    oldRect: Rect
  ) {
    const { x, y, width, height } = this.box!.getBoundingClientRect();
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
    if (this.props.animKey && this.context!.rects[this.props.animKey]) {
      const prevRect = this.context!.rects[this.props.animKey];
      const { x, y, width, height } = this.box!.getBoundingClientRect();

      this.playFromPrevRect(prevRect, { x, y, width, height });
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
    const { widthRatio, heightRatio, xDelta, yDelta } = from;

    const newState = "scale(1, 1) translate(0, 0)";
    const oldState = `scale(${widthRatio}, ${heightRatio}) translate(${
      xDelta / widthRatio
    }px, ${yDelta / heightRatio}px) `;

    this.box!.style.transform = oldState;
    this.box!.style.transformOrigin = "top left";
    this.box!.style.transition = "";

    if (isFade) {
      this.box!.style.opacity = "0";
    }

    window.requestAnimationFrame(() => {
      this.box!.style.transform = newState;
      this.box!.style.opacity = "1";
      this.box!.style.transition = "transform 0.2s linear, opacity 0.2s linear";
    });
  }

  componentWillUnmount() {
    if (!this.props.animKey) return; 

    const { x, y, width, height } = this.box!.getBoundingClientRect();
    this.context.update(this.props.animKey, {
      x,
      y,
      width,
      height,
    });
  }

  render() {
    const ComponentName = this.props.as ?? "div";
    const {
      className = "",
      from,
      fromFade,
      debugName,
      animKey,
      ...rest
    } = this.props;

    return (
      <ComponentName
        className={`moving-box ${className}`}
        ref={(el: HTMLElement | null) => {
          this.box = el;
        }}
        {...rest}
      />
    );
  }
}
