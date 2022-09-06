import { MovingBox } from "movingbox";
import { ButtonModal } from "../examples/ButtonModal";
import rawExample from "../examples/ButtonModal.tsx?raw";
import { Code } from "../utils/Code";


export const ButtonModalPage = () => {
    return (
        <div>
            <ButtonModal />
            <MovingBox>
                <h1>Usage</h1>
                <Code language="jsx">
                    {rawExample}
                </Code>
            </MovingBox>
        </div>
    )
}
