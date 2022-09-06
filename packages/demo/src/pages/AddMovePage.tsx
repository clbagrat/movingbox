import { MovingBox } from "movingbox";
import { AddMove } from "../examples/AddMove";
import rawExample from "../examples/AddMove.tsx?raw";
import { Code } from "../utils/Code";


export const AddMovePage = () => {
  return (
    <div>
    <AddMove />
    <MovingBox>
        <h1>Usage</h1>
        <Code language="jsx">
            {rawExample}
        </Code>
    </MovingBox>
</div>
  )
}
