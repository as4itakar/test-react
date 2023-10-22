import { useState } from "react";

function useFetching(callback: () => Promise<any>){
    const [load, setLoad] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try{
            setLoad(true)
            await callback()
        }catch(e: any){
            setLoad(false)
            setError(e.message)
        }finally{
            setLoad(false)
        }
    }

    return [fetching, load, error] as const
}

export default useFetching