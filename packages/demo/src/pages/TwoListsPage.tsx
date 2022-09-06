import { MovingBox } from "movingbox";
import { TwoLists } from "../examples/TwoLists";
import rawExample from '../examples/TwoLists.tsx?raw';
import { Code } from "../utils/Code";

export const TwoListsPage = () => {
  return (
    <div>
      <TwoLists />
      <MovingBox>
        <h1>Usage</h1>
        <Code language="jsx">
          {rawExample}
        </Code>
      </MovingBox>
    </div>
  )
}
