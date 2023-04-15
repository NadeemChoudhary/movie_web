import React, { useEffect, useState } from 'react'
import { FetchData } from '../Api/api'

export default function FetchApiHook(url) {
    const [Data, setData] = useState([])
    const [Error, setError] = useState(null)
    const [Loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading('Loading')
        setData(null)
        setError(null)
        FetchData(url).then((res) => {
            setData(res);
            setLoading(false)

        })
    }, [url])

    return { Data, Loading, Error }
}
