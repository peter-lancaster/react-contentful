import React, {useState, useEffect} from "react" 
import * as contentful from "contentful"

const Context = React.createContext()

function ContextProvider({children}) {


    // const [posts, setPosts] = useState([])
    // console.log("this is posts at top of ContextProvider")
    // console.log(posts)

    // var client = contentful.createClient({
    //   space: '8h2joeckc394',
    //   accessToken: 'dIQ8tryIq-BA621gJKeUyecDfVRndSEjxsu_Cflzz08' })
  
    // function getBlogEntries() { 
    //     console.log("im in getBlogEntries")  
    //     client.getEntries()
    //     .then(console.log("first getBlogEntries step done"))
    //                     .then(entries => {
    //                         console.log("getBlogEntries calls storeBlogEntries")
    //                         storeBlogEntries(entries)})

    //     console.log("leaving getBlogEntries")
    // }

    // function storeBlogEntries(entries) {

    //     let allBlogEntries = []

    //     console.log("im in storeBlogEntries") 
    //     console.log("entries = ")
    //     console.log(entries)
    //     console.log("allBlogEntries = ")
    //     console.log(allBlogEntries)

    //     allBlogEntries = entries.items.map(element => {return element})
    //     console.log("allBlogEntries now =")
    //     console.log(allBlogEntries)

    //     setPosts(allBlogEntries)
  
        // PETE - THERE ARE SOME IMPORTANT LEARNINGS HERE AS A RESULT OF ALL THESE console.logs!!! 
        //
        // 1) WHENEVER YOU CHANGE STATE, THEN THE REQUIRED RERENDER IS ABSOLUTELY IMMEDIATE. 
        // SO FOR EXAMPLE THE "setPosts" STATE CHANGE ABOVE WILL IMMEDIATELY RERUN ContextProvider 
        // COMPONENT FOLLOWED BY App Component ETC. ETC. ALL THE WAY DOWN THE RENDERING TREE.
        //
        // WHEN THIS RERENDER IS COMPLETED, THEN THE PROCESSING WILL PICK UP EXACTLY WHERE IT LEFT 
        // OFF (IN THIS EXAMPLE THE "this is posts just before leaving storeBlogEntries") 
        // console.log below. 
        //
        // AT THE POINT OF THIS PICKUP, THE "posts" VARIABLE WILL SHOW AS EMPTY ARRAY [] !!!!!!!!!!!!!!
        // WHY IS THIS ?!!?
        // IS IT SOMETHING TO DO WITH JAVASCRIPT FUNCTION SCOPE? (i.e. THE CHANGE TO THE "posts" VARIABLE
        // OCCURS OUTSIDE THE SCOPE OF THE "storeBlogEntries" function), SO WHEN WE PICK UP WHERE WE LEFT 
        // OFF WITHIN THE "storeBlogEntries" FUNCTION, THE "posts" VARIABLE STILL SHOWS AS EMPTY ARRAY
        // 
  
    //     console.log("this is posts just before leaving storeBlogEntries")
    //     console.log(posts)

    //     console.log("im leaving storeBlogEntries") 

    // }

    // useEffect(() => {
    //     console.log("in useEffect")
    //     getBlogEntries()
    // } ,[])



    console.log("ContextProvider just before return")
    console.log("this is posts at end of ContextProvider")
    console.log(posts)


    return(
        <Context.Provider value={{posts}} >
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}