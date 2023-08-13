import React from "react";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import {InputAdornment} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

const MyLink = styled(Link)({
    textDecoration: "none",
    boxShadow: "none",
    color: "white"
});

function Comment(props){
    const {text,userId,userName} = props;

    return (
        <CardContent>
            <OutlinedInput
            disabled
            id = "outlined-adornment-amount"
            multiline
            inputProps = {{maxLength:25}}
            fullWidth
            value ={text}
            startAdornment ={<InputAdornment position = "start">

                <MyLink to={{ pathname: '/users/' + userId }}>
                    <Avatar sx={{background:"linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white" }} aria-label="recipe">
                        {userName.charAt(0).toUpperCase()}
                    </Avatar>
                </MyLink>

            </InputAdornment>}>
            ></OutlinedInput>
        </CardContent>
    )
}
export default Comment;