import { useState, useEffect } from "react"
import axios from "axios"

export const useFetch = ({url})=>{
    const [data, setData] = useState(null)
    var catalog = [];
    const loadData = async()=>{
        try {
           const response = await axios.get(url)
           if(response.status === 200){
            setData(response.data.catalogo)
            //console.log(response.data.catalogo)
            /*
            catalog = await data.data.catalog.map(function(i) {
                return i;
            })*/
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