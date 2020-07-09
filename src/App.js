import React, {useContext} from 'react';
import './App.css';
import {Context} from "./ContextProvider"
import BlogListItems from "./components/BlogListItems"
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"


function App() {

  console.log("App")

  const {allPosts} = useContext(Context)

  // console.log("this is posts in App")
  // console.log(posts)

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
        <Route path ={`/`} >{blogList}</Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
