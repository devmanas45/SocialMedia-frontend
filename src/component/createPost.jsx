import { useContext, useRef } from "react";
import {PostList} from '../store/post-list-store'
const CreatePost=()=>{
    const {addPost}=useContext(PostList);
    const userIDElement=useRef();
    const postTitleElement=useRef();
    const postBodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const userId=userIDElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=tagsElement.current.value.split('');
        userIDElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";
        addPost(userId,postTitle,postBody,reactions,tags);
    };
    return(
    <form className="create-post" onSubmit={handleSubmit}>
         <div className="mb-3">
            <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
            <input type="text" ref={userIDElement} className="form-control" id="userId" placeholder="Enter your id"/>
        </div>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="Enter your feeling 👋"/>
        </div>
        <div className="mb-3">
            <label htmlFor="body" className="form-label">Content</label>
            <textarea  type="text" ref={postBodyElement} rows="8"  className="form-control" id="body" placeholder="Describe your feeling 🥁"/>
        </div>
        <div className="mb-3">
            <label htmlFor="reactions" className="form-label">Number of reactions</label>
            <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
        </div>
        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Enter the hashtags</label>
            <input type="text " ref={tagsElement} className="form-control" id="tags" placeholder="Enter tags for the post"/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
    )
};
export default CreatePost;