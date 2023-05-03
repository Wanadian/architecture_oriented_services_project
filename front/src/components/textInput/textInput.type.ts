import {RefObject} from "react";

export type TextInputProps = {
    placeholder?: string,
    inputReference: RefObject<HTMLInputElement>,
    defaultValue?: string,
    className?: string
};