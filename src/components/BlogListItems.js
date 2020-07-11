import React from "react" 
import BodyContentItem from "./BodyContentItem"
import {Link} from "react-router-dom"
import dateReformat from "../utils/dateReformat"


function BlogListItems({itemDetails}) {

    

    const title = itemDetails.title
    const slug = itemDetails.slug
    const date = (itemDetails.date.slice(9,10))+ " " +itemDetails.date.slice(6,7)+ " " + (itemDetails.date.slice(0,4)) 

    const testDate = dateReformat(itemDetails.date) 

    console.log("testDate = ")
    console.log(testDate)

    const description = itemDetails.description.content[0].content[0].value
    const image = itemDetails.featuredImage.fields.file.url
    const imageTitle = itemDetails.featuredImage.fields.title
    const imageDescription = itemDetails.featuredImage.fields.description
    const bodyContentArray = itemDetails.body.content

    return(
        <div className="blog-list-item">
            <Link className="blog-list-item-link" to={`/${slug}`}><h1>{title}</h1>
            <img alt={imageDescription} src={image} />
            <p>{description}</p>
            <p>{date}</p></Link>
        </div>
    )
}


export default BlogListItems