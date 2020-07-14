import {useState, useEffect} from "react" 
import * as contentful from "contentful"
import {getAllPosts} from "./getContentfulContent"

function useAllPosts() {
    
    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const promise = getAllPosts()

    // var client = contentful.createClient({
    //     space: '8h2joeckc394',
    //     accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })
    
    //   function getBlogEntries() { 
    //       client.getEntries()
    //       .then(entries => {setAllPosts(entries.items.map(element => {return element}))})
    //       .then(setIsLoading(false))
    //       .catch(error => console.error(error))
    //   }
    
    //   useEffect(() => {
    //       console.log("in useEffect")
    //       getBlogEntries()
    //   } ,[])

      useEffect(() => {
            console.log("in useEffect")
            promise.then(result => {
            console.log("this is my promise result")
            console.log(result.items.map(element => {return element}))
            setAllPosts(result.items.map(element => {return element}))
            setIsLoading(false)
            })
      } ,[])

    return {allPosts, isLoading}

}



export default useAllPosts