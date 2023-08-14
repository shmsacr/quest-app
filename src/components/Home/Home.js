import React, {useEffect, useState} from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";

function Home(){
    const [error,setError] = useState(null);
    const [isLoaded,setIsloaded] = useState(false);
    const [postList,setPostList] = useState([]);

    const refresPosts =() => {
        fetch("/posts")
            .then(res =>res.json())
            .then((result) => {
                    setIsloaded(true);
                    setPostList(result);
                },
                (error) =>{
                    setIsloaded(true);
                    setError(error);
                })
    }
    useEffect(()=>{
    refresPosts();
    },[postList])
    if(error){
        return <div> ERROR!!</div>;
    }else if(!isLoaded){
        return <div> Loading...</div>;
    }else{
        return (
            <div style ={{backgroundColor:"#f0f5ff",height:"100vH",justifyContent: "center", flexDirection: "column",alignItems: "center" }}>
                <PostForm userId = {4} userName = {"post.userName"}  refresPosts = {refresPosts}/>
                {postList.map(post => (<Post likes = {post.postLikes} userId = {post.userId} userName = {post.userName} title = {post.title} text ={post.text} postId = {post.id}></Post>))}
            </div>

        );
    }
}

export default Home;