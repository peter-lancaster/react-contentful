import React from "react" 
import BodyContentItem from "./BodyContentItem"
import {useParams} from "react-router-dom"
import dateReformat from "../utils/dateReformat"
import useSinglePost from "../utils/useSinglePost"

function BlogItem() {

    console.log("BlogItem top")

    const {entrySlug} = useParams()
    const {blogEntry, isLoading} = useSinglePost(entrySlug)

    console.log("BlogItem middle")

    if(isLoading) {

        console.log("BlogItem bottom just before UNpopulated return")
        return (
            <div>
                LOADING BLOG POST..... PLEASE WAIT....
            </div>
        )
    } else {
        const title = blogEntry.title
        const date = dateReformat(blogEntry.date)
        const description = blogEntry.description.content[0].content[0].value
        const image = blogEntry.featuredImage.fields.file.url
        const imageTitle = blogEntry.featuredImage.fields.title
        const imageDescription = blogEntry.featuredImage.fields.description
        const bodyContentArray = blogEntry.body.content

        const fullContent = bodyContentArray.map((element, input) => {
            return <BodyContentItem key={input} item={element} />
        })

        
        console.log("BlogItem bottom just before populated return")

        return(
            <div className="blog-item">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
                <img alt={imageDescription} src={image} />
                <div>{fullContent}</div>
            </div>
        )

    }


}


export default BlogItem