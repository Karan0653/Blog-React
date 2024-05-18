import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
           console.log(res);

           if (!res.ok){
            throw Error('could not fetch the data for that resource')
           }

           return res.json();
        })
        .then(data => {
            console.log(data);
            setTimeout(()=>{
                setData(data)
                setLoading(false)
                setError(null)
            },1000)
        })
        .catch((err) => {
            console.log(err.message);
            setError(err.message)
            setLoading(false)
        }) 
        },[url])


  return {data, loading, error}
}

export default useFetch