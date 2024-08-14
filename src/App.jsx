import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './component/header'
import Footer from './component/footer'
import Sidebar from './component/sidebar'
import CreatePost from './component/createPost'
import PostList from './component/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';
function App(){
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="content">
          <Header/>
          {selectedTab==='Home'?<PostList/>:<CreatePost/>}
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;
