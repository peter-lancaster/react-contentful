import React, {useState, useEffect} from "react" 
import * as contentful from "contentful"

const Context = React.createContext()

function ContextProvider({children}) {
   
    const [allPosts, setAllPosts] = useState([])

    var client = contentful.createClient({
      space: '8h2joeckc394',
      accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })
  
    function getBlogEntries() { 
        client.getEntries()
        .then(entries => {storeBlogEntries(entries)})
        .catch(error => console.error(error))
    }

    function storeBlogEntries(entries) {
        let allBlogEntries = []
        allBlogEntries = entries.items.map(element => {return element})
        setAllPosts(allBlogEntries)
    }

    useEffect(() => {
        getBlogEntries()
    } ,[])

    return(
        <Context.Provider value={{allPosts}} >
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}