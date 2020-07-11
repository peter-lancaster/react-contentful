import {useState, useEffect} from "react" 
import * as contentful from "contentful"
import {getSinglelPost} from "./getContentfulContent"

function useSinglePost(entrySlug) {

    console.log("useSinglePost " +entrySlug)
    
    const [blogEntry, setBlogEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function getBlogEntry() {
        
        console.log(entrySlug)

        var client = contentful.createClient({
            space: '8h2joeckc394',
            accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })
        
        client.getEntries({"fields.slug" : entrySlug, "content_type": "testContent"})
        .then(response => {
            console.log("IM POPULATING BLOGENTRY NOW !!! ")
            setBlogEntry(response)})
        .then(() => 
            {console.log("IM SETTING IS LOADING TO FALSE")
            setIsLoading(false)}
            )
        .catch(error => console.error(error))
    }
     
    useEffect(() => getBlogEntry(),[]) 

    return {blogEntry, isLoading}

}



export default useSinglePost