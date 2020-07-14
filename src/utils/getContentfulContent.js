import * as contentful from "contentful"

    var client = contentful.createClient({
    space: '8h2joeckc394',
    accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08'})

    //-----------------------------------------------------------------

    function getAllPosts() {
        return client.getEntries()
        .then(response => response)
    }

    //-----------------------------------------------------------------
      
    function getSinglePost(slug){
        console.log("I'm entering getSinglePost")
            return client
                .getEntries({
                    'fields.slug': slug,
                    content_type: 'testContent'
                })
            .then(response => newFunction(response))
        }

    function newFunction(response) {
        console.log("in newFunction. response = ")
        console.log(response)
        console.log("in newFunction. response.items = ")
        console.log(response.items[0].fields)
        return response.items[0].fields
    }

    //-----------------------------------------------------------------

export {getAllPosts, getSinglePost}


