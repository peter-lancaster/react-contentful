import React, {useContext} from 'react';
import './App.css';
import {Context} from "./ContextProvider"
import {Link} from "react-router-dom"
import BlogItem from "./components/BlogItem"


function App() {

  console.log("App")

  const {allPosts} = useContext(Context)

  // console.log("this is posts in App")
  // console.log(posts)

  const blogPostList = allPosts.map(function(element, index) {

    console.log("in map")
    console.log(element.fields.description.content.value)
    return (<BlogItem key={index} itemDetails={element.fields}   />)
  })


  console.log("this is blogPostList in App")

  console.log(blogPostList)



  return (
    <div className="App">
      {blogPostList}

    </div>
  );
}

export default App;
