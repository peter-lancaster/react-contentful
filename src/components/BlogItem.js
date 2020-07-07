import React from "react" 
import BodyContentItem from "./BodyContentItem"

function BlogItem({itemDetails}) {

    const title = itemDetails.title
    const date = itemDetails.date
    const description = itemDetails.description.content[0].content[0].value
    const image = itemDetails.featuredImage.fields.file.url
    const imageTitle = itemDetails.featuredImage.fields.title
    const imageDescription = itemDetails.featuredImage.fields.description
    const bodyContentArray = itemDetails.body.content

    const fullContent = bodyContentArray.map((element, input) => {
        return <BodyContentItem key={input} item={element} />
    })


    console.log("in BlogItem")

    console.log(itemDetails)

    console.log("breakdown1 : ")
    console.log(itemDetails.body.content)


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


export default BlogItem