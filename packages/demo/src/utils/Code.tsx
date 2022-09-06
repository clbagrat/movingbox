import { CSSProperties } from "react";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import './Code.css';

type CodeProps = {
    language?: string,
    style?: CSSProperties,
    children: string,
}

export const Code = ({ language, style, children }: CodeProps) => {

    const highlighted = language ? hljs.highlight(language, children) : hljs.highlightAuto(children);

    return (
        <div className="code-highlight">
            <pre className="hljs" style={style}>
                <code dangerouslySetInnerHTML={{ __html: highlighted.value }} />
            </pre>
        </div>
    )
}
