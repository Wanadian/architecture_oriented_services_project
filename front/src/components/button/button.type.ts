import {MouseEventHandler} from "react";

export type ButtonProps = {
    label: string,
    href?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string
}