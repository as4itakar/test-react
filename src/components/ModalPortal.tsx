import ReactDOM from "react-dom"
import IPortal from "../models/component/IPortal"

function ModalPortal({children}: IPortal){

    const el = document.querySelector('#portal')!

    return ReactDOM.createPortal(children, el)
}

export default ModalPortal