import React, { useEffect } from "react"
import ReactDOM from "react-dom"

interface IPortal{
    children: React.ReactNode
}

function ModalPortal({children}: IPortal){

    const el = document.querySelector('#portal')!

    return ReactDOM.createPortal(children, el)
}

export default ModalPortal