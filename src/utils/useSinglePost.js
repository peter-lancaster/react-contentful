import {useState, useEffect} from "react" 
import * as contentful from "contentful"
import {getSinglePost} from "./getContentfulContent"

function useSinglePost(entrySlug) {

    console.log("I'm entering useSinglePost and my entryslug is ")
    console.log(entrySlug)

    const promise = getSinglePost(entrySlug)

    console.log("I'm in the middle of useSinglePost, promise = ")
    console.log(promise)
    
    const [blogEntry, setBlogEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // function getBlogEntry() {
        
    //     console.log("Im at start of getBlogEntry")

    //     var client = contentful.createClient({
    //         space: '8h2joeckc394',
    //         accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })

    //     console.log("Im in middle of getBlogEntry")
        
    //     client.getEntries({"fields.slug" : entrySlug, "content_type": "testContent"})
    //     .then(response => {
    //         console.log("IM POPULATING BLOGENTRY NOW !!! ")
    //         setBlogEntry(response)})
    //     .then(() => 
    //         {console.log("IM SETTING IS LOADING TO FALSE")
    //         setIsLoading(false)}
    //         )
    //     .catch(error => console.error(error))

    //     console.log("Im at end of getBlogEntry")
    // }


    // useEffect(() => {
    //     console.log("i'm in useSinglePost useEffect")
    //     getBlogEntry()}
    //     ,[]) 



    useEffect(() => {
        console.log("im in useSinglePost useEffect")
        promise.then(result => {
            console.log("this is my promise result")
            console.log(result)
            setBlogEntry(result)
            setIsLoading(false)
        })

    } ,[])

    // getBlogEntry();

    // PETE - THE useEffect above is very necessary, if it isn't there (and is just replaced with a straight call
    // to (getBlogEntry(), then you get stuck in an infinite loop, because the getBlogEntry() function changes
    // state variables, which causes a rerender, which causes a call of getBlogEntry() which changes
    // state variables, which causes a rerender, which causes a call of getBlogEntry() etc. etc.
    // Therefore in this case the useEffect is used to exclude the call of getBlogEntry() from the normal running of
    // the useSinglePost Component (and just call it once)

    console.log("I'm leaving useSinglePost and my blogEntry is ")
    console.log(blogEntry)
    console.log("I'm leaving useSinglePost and my isLoading is ")
    console.log(isLoading)

    return {blogEntry, isLoading}

}



export default useSinglePost

//NOTES AND LEARNINGS FROM THIS WORK

//1) If you have a custom hook which uses a fetch() (or any other method which returns a promise)
//and that custom hook changes state variables, 