import React from 'react';
import './App.css';
import BlogListItems from "./components/BlogListItems"
import BlogItem from "./components/BlogItem"
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"
import useAllPosts from "./utils/useAllPosts"

function App() {

  const {allPosts, isLoading} = useAllPosts()

  const blogList = allPosts.map(function(element, index) {
    return (<BlogListItems key={index} itemDetails={element.fields}   />)
  })

  if(isLoading) {
    return (
      <div>
        <Header />
        <main>
          <p>Please wait.... loading blog entries</p>
        </main>
        <Footer />
      </div>
    );
  } else {
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

 
}

export default App;
