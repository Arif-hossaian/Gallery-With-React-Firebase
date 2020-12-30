import { useState, useEffect } from "react"
import { projectStorage } from "../firebase/config"


const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)


    useEffect(() => {
        //creting a references to a file inside the default firebase storage bucket
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on("State_Changed", (snap) => {
            let parcentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(parcentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })

    }, [file])


    return { progress, url, error }
}

export default useStorage
