import {createContext, useReducer } from "react";
// const DEFAULT_CONTEXT={
//     postList:[],
//     addPost:()=>{},
//     deletePost:()=>{},
// }
export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});
const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=newPostList.filter(post=>post.id!==action.payload.postID);
    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currPostList];
    }
    return newPostList;
}
const PostListProvider=({children})=>{
    const [postList, dispatchPostList] = useReducer(postListReducer,DEFUALT_POST_LIST);
    const addPost=(userId,postTitle,postBody,reactions,tags)=>{
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                
                    id:Date.now() ,
                    title:postTitle,
                    content:postBody,
                    reactions:reactions,
                    userId:userId,
                    tags:tags,
            }
        });
    }
        
   const deletePost=(postID)=>{
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postID,
            },
        })
        
    }
    return (
    <PostList.Provider value={
        {postList,
        addPost,
        deletePost
        }
    }>

        {children}
    </PostList.Provider>
)};
const DEFUALT_POST_LIST=[{
    id: 1,
    title:"Going to Mumbai",
    content: "Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions:2,
    userId:"user-9",
    tags:["vacation","Mumbai","Enjoying"],
},
{
    id: 2,
    title:"Selected in Google India",
    content: "Hi friends, I am going to work for Google as software engineer. Hope to enjoy a lot. Peace out.",
    reactions:50,
    userId:"user-5",
    tags:["job","SWE","Enjoying"],
},
]
export default PostListProvider;