import * as contentful from "contentful"

    var client = contentful.createClient({
    space: '8h2joeckc394',
    accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08'})

    const getAllPosts = () => {
        client.getEntries()
        .then(entries => entries.items)
        .catch(error => console.error(error))
    }
   
    function getSinglePost(inputSlug) {

        console.log("starting getSinglePost, inputSlug is ")
        console.log(inputSlug) 
        
        let responseReturn = {}   

        client.getEntries({"fields.slug" : inputSlug, "content_type": "testContent"})
        .then(response => {
            console.log("I'm populating response return variable")
            responseReturn = response
            console.log(responseReturn)
            return responseReturn
            })
        .catch(error => console.error(error))

        console.log("leaving getSinglePost, response return is ")
        console.log(responseReturn) 


        return responseReturn
    }



export {getAllPosts, getSinglePost}