import { Dispatch, SetStateAction } from "react"

export default interface IInputArea{
    searchFunc: () => void
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}