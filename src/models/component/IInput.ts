import { Dispatch, SetStateAction } from "react";

export default interface IInput{
    searchValue: string,
    setValue: Dispatch<SetStateAction<string>>
}