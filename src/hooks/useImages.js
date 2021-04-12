import {useState, useEffect } from "react"
function useImages() {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState()

    useEffect(() =>{
        const fetchUsers = async () =>{
            const user=await fetch(url).then(res=>res.json()).catch(err=>setError(err))
            setUsers(user)
            setLoading(false)
        }
        fetchUsers()
    }, [url])
    return {
        err,
        loading,
        users
    };

};
export default useImages;