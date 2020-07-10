import React, {useEffect, useState} from "react" 
import BodyContentItem from "./BodyContentItem"
import {useParams} from "react-router-dom"
import * as contentful from "contentful"


function BlogItem() {

    console.log("BlogItem top")

    const {entrySlug} = useParams()
    const [blogEntry, setBlogEntry] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

    //Be careful Pete ! - Contentful "content type" is not the "content type" 
    // that is supplied on the "content" page within contentful!! Instead, 
    // click on a content entry, select "info", and look for "CONTENT TYPE ID"

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


    // ===================================================================================

    // const {entrySlug} = useParams()

    // console.log("in BlogItem")

    // console.log(entrySlug)
    // console.log(allPosts)

    // // console.log(allPosts.filter(element => element.fields.slug === entrySlug))

    // const correctBlogPost = allPosts.filter(element => element.fields.slug === entrySlug)[0]



    // ===================================================================================


    // const title = correctBlogPost.fields.title
    // const date = correctBlogPost.fields.date
    // const description = correctBlogPost.fields.description.content[0].content[0].value
    // const image = correctBlogPost.fields.featuredImage.fields.file.url
    // const imageTitle = correctBlogPost.fields.featuredImage.fields.title
    // const imageDescription = correctBlogPost.fields.featuredImage.fields.description
    // const bodyContentArray = correctBlogPost.fields.body.content

    // const fullContent = bodyContentArray.map((element, input) => {
    //     return <BodyContentItem key={input} item={element} />
    // })



    // return(
    //     <>
    //         <h1>{title}</h1>
    //         <p>{description}</p>
    //         <p>{date}</p>
    //         <img alt={imageDescription} src={image} />
    //         <p>{fullContent}</p>
    //     </>
    // )

    if(isLoading) {

        console.log("loading message")

        return (
            <div>
                LOADING BLOG POST..... PLEASE WAIT....
            </div>
        )
    } else {

        console.log("BlogItem just before return")
        console.log("blogEntry = ")
        console.log(blogEntry)

        console.log(blogEntry.items[0].fields)


        const title = blogEntry.items[0].fields.title
        const date = blogEntry.items[0].fields.date
        const description = blogEntry.items[0].fields.description.content[0].content[0].value
        const image = blogEntry.items[0].fields.featuredImage.fields.file.url
        const imageTitle = blogEntry.items[0].fields.featuredImage.fields.title
        const imageDescription = blogEntry.items[0].fields.featuredImage.fields.description
        const bodyContentArray = blogEntry.items[0].fields.body.content

        const fullContent = bodyContentArray.map((element, input) => {
            return <BodyContentItem key={input} item={element} />
        })



        return(
            <>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
                <img alt={imageDescription} src={image} />
                <p>{fullContent}</p>
            </>
        )

    }





}


export default BlogItem