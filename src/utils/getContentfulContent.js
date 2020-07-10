import * as contentful from "contentful"

    var client = contentful.createClient({
    space: '8h2joeckc394',
    accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08'})

    const getAllPosts = () => {
        client.getEntries()
        .then(entries => entries.items)
        .catch(error => console.error(error))
    }
   
    const getSinglePost = (slug) => {
        client.getEntries({"props.slug" : slug, "content_type": "testContent"})
        .then(response => response.items)
        .catch(error => console.error(error))
    }



export {getAllPosts, getSinglePost}