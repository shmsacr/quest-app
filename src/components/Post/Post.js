import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

function Post(){
    const [error,setError] = useState(null);
    const [isLoaded,setIsloaded] = useState(false);
    const [postList,setPostList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9090/posts")
            .then(res =>res.json())
            .then((result) => {
                setIsloaded(true);
                setPostList(result);
                },
                (error) =>{
                setIsloaded(true);
                setError(error);
                })
    },)
    if(error){
        return <div> ERROR!!</div>;
    }else if(!isLoaded){
        return <div> Loading...</div>;
    }else{
        return (
            <u1>{postList.map(post=>(
                <li>
                    {post.title}{post.text}
                </li>
            ))}</u1>
        );
    }
}
export default Post;