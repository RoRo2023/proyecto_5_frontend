import { useState, useEffect } from "react"
import axios from "axios"

export const useFetch = ({url})=>{
    const [data, setData] = useState(null)
    const loadData = async()=>{
        try {
           const response = await axios.get(url)
           if(response.status === 200){
            setData(response)
           }
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])

    return { data }
}