import React from "react" 

function BlogItem({itemDetails}) {

    const title = itemDetails.title
    const date = itemDetails.date
    const description = itemDetails.description.content[0].content[0].value


    console.log("in BlogItem")

    console.log(itemDetails)

    console.log("breakdown : ")
    console.log(itemDetails.description.content[0].content[0].value)


    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{date}</p>

 

        </>
    )
}


export default BlogItem