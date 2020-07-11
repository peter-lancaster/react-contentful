import React, {useEffect, useState} from "react" 
import BodyContentItem from "./BodyContentItem"
import {useParams} from "react-router-dom"
import * as contentful from "contentful"
import useSinglePost from "../utils/useSinglePost"


function BlogItem() {

    console.log("BlogItem top")

    const {entrySlug} = useParams()
    const {blogEntry, isLoading} = useSinglePost(entrySlug)

    if(isLoading) {
        return (
            <div>
                LOADING BLOG POST..... PLEASE WAIT....
            </div>
        )
    } else {
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