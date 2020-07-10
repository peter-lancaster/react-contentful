import React from "react" 
import BodyContentItem from "./BodyContentItem"
import {Link} from "react-router-dom"

function BlogListItems({itemDetails}) {

    console.log("in BlogListItem1")

    const title = itemDetails.title
    const slug = itemDetails.slug
    const date = itemDetails.date
    const description = itemDetails.description.content[0].content[0].value
    const image = itemDetails.featuredImage.fields.file.url
    const imageTitle = itemDetails.featuredImage.fields.title
    const imageDescription = itemDetails.featuredImage.fields.description
    const bodyContentArray = itemDetails.body.content


    console.log("in BlogListItem2")

    console.log(itemDetails)

    console.log("breakdown1 : ")
    console.log(itemDetails.body.content)


    return(
        <>
            <Link to={`/${slug}`}><h1>{title}</h1></Link>
            <p>{description}</p>
            <p>{date}</p>
            <img alt={imageDescription} src={image} />
        </>
    )
}


export default BlogListItems