import { createContext, useCallback, useRef } from "react";
import { Rect } from "./MovingBox";

type Rects = Record<string, Rect>;

type ContextValues = {
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
  const rects = useRef<Rects>({})

  const update = useCallback(
    (key: string, rect: Rect) => {
      rects.current[key] = rect;
    },
    [rects]
  );

  return (
    <MovingBoxContext.Provider value={{ update, rects: rects.current }}>
      {children}
    </MovingBoxContext.Provider>
  );
};
