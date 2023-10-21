import React, { useEffect } from "react"
import ReactDOM from "react-dom"

interface IPortal{
    children: React.ReactNode
}

function ModalPortal({children}: IPortal){
    const el = document.createElement('div')

    useEffect( () => {
        document.body.appendChild(el)

        return () => {
            document.body.removeChild(el)
        }
    }, [])
    return ReactDOM.createPortal(children, el)
}

export default ModalPortal