//! Component này giúp reset tất các style css trong dự án
import { PropsWithChildren} from "react";
// import {ReactNode} from "react"
import "./index.css";
import "./button.css";
// C2: ReactNode
// type Props = {
//     children: ReactNode;
// };

// ------------------------------ C1: PropsWithChildren
export function GlobalStyle(props: PropsWithChildren) {
    return props.children;
}
