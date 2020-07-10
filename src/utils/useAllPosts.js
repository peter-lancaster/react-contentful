import {useState, useEffect} from "react" 
import * as contentful from "contentful"
import {getAllPosts} from "./getContentfulContent"

function useAllPosts() {
    
    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    var client = contentful.createClient({
        space: '8h2joeckc394',
        accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })
    
      function getBlogEntries() { 
          client.getEntries()
          .then(entries => {setAllPosts(entries.items.map(element => {return element}))})
          .then(setIsLoading(false))
          .catch(error => console.error(error))
      }
    
      useEffect(() => {
          console.log("in useEffect")
          getBlogEntries()
      } ,[])

    return {allPosts, isLoading}

}



export default useAllPosts