import { Dispatch, SetStateAction } from "react";

export default interface IModalContent{
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>,
    userName: string
}