import {useState, useEffect} from "react" 
import {getAllPosts} from "./getContentfulContent"

function useAllPosts() {
    
    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
        .then(response => {setAllPosts(response)
                            setIsLoading(false)})

    } ,[])

    return {allPosts, isLoading}

}



export default useAllPosts