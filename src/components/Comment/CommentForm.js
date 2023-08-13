import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import {InputAdornment} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const MyLink = styled(Link)({
    textDecoration: "none",
    boxShadow: "none",
    color: "white"
});

function CommentForm(props){
    const {userId,userName,postId} = props;
    const[isSent,setIsSent] = useState(false);
    const[text,setText] = useState("");

    const saveComment = ()  =>{
        fetch("/comments",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                userId:userId,
                postId:postId,
                text:text
            })
        }).then((res)=> res.json()).catch((err)=>console.log("ERROR"))
    }
    const handleSubmit = ()=>{
        saveComment();
        setIsSent(true);
        setText("");

    }
    const handleChange = (value)=>{
        setText(value);
    }
    return (
        <CardContent>
            <OutlinedInput

                id = "outlined-adornment-amount"
                multiline
                inputProps = {{maxLength:250}}
                fullWidth
                onChange = {(i)=> handleChange(i.target.value)}
                startAdornment ={<InputAdornment position = "start">

                    <MyLink to={{ pathname: '/users/' + userId }}>
                        <Avatar sx={{background:"linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white" }} aria-label="recipe">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </MyLink>

                </InputAdornment>}
                endAdornment = {
                <InputAdornment position = "end">
                    <Button variant="contained"
                        sx= {{background: "linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white"}}
                        onClick = {handleSubmit}
                >COMMENT</Button>
                </InputAdornment>
                }
                value ={text}
                style ={{color:"black", background:"white"}}
                ></OutlinedInput>
        </CardContent>
    )
}
export default CommentForm;