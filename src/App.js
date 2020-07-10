import React, {useContext} from 'react';
import './App.css';
import {Context} from "./ContextProvider"
import BlogListItems from "./components/BlogListItems"
import BlogItem from "./components/BlogItem"
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"


function App() {

  console.log("App")

  const {allPosts} = useContext(Context)

  console.log("this is allPosts in App")
  console.log(allPosts)

  const blogList = allPosts.map(function(element, index) {

    console.log("in map")
    console.log(element)
    return (<BlogListItems key={index} itemDetails={element.fields}   />)
  })


  console.log("this is blogList in App")

  console.log(blogList)



  return (
    <div>
      <Header />
      <main>
      <Switch>
        <Route exact path ="/" >{blogList}</Route>
        <Route path ="/:entrySlug" ><BlogItem /></Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
