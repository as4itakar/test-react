import { ReactNode } from "react";

export default interface IButton{
    children: ReactNode,
    callFunc: () => void
}