import React, { createContext, useCallback } from "react";

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
}

type Rects = Record<string, Rect>;

export type ContextValues = {
  update: (key: string, rect: Rect) => void;
  rects: Rects
};

export const MovingBoxContext = createContext<ContextValues>({
  update: () => {},
  rects: {}
});


export const MovingBoxContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const rects = React.useRef<Rects>({});
  const keysToClean = React.useRef<string[]>([]);

  const update = useCallback(
    (key: string, rect: Rect) => {
      if (rects.current[key]) return;
      rects.current[key] = rect;
      keysToClean.current.push(key);
      requestAnimationFrame(() => {
        keysToClean.current.forEach(k => {
          delete rects.current[k]
        });

        keysToClean.current.length = 0;
      })
    },
    [rects]
  );

  return (
    <MovingBoxContext.Provider value={{ update, rects: rects.current }}>
      {children}
    </MovingBoxContext.Provider>
  );
};
