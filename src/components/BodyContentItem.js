import React from "react" 

function BodyContentItem({item}) {

    console.log("BodyContentItem")
    console.log(item)

    console.log("BodyContentItem Breakdown1")
    console.log(item.content[0].value)

    console.log("BodyContentItem Breakdown2")
    console.log(item.nodeType)

    


    return(
        <>
        <p className={item.nodeType}>{item.content[0].value}</p>
        </>
    )
}

export default BodyContentItem