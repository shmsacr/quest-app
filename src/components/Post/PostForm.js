import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {InputAdornment} from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const PostContainer = styled('div')(({ theme }) => ({
    margin: '0 auto',
    maxWidth: 800,
    padding: theme.spacing(3),

}));
const MyLink = styled(Link)({
    textDecoration: "none",
    boxShadow: "none",
    color: "white"
});
function PostForm(props){
    const {userName,userId,refresPosts} = props;
    const[title,setTitle] = useState("");
    const[text,setText] = useState("");
    const[isSent,setIsSent] = useState(false);
    const [open, setOpen] = React.useState(false);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSent(false);
    };
    const savePost = ()  =>{
        fetch("/posts",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                title:title,
                userId:userId,
                text:text,
            })
        }).then((res)=> res.json()).catch((err)=>console.log("ERROR"))
    }
    const handleSubmit = ()=>{
        savePost();
        setIsSent(true);
        setTitle("");
        setText("");
        refresPosts();

    }
    const handleTitle = (value) =>{
        setTitle(value);
        setIsSent(false);
    }
    const handleText = (value) =>{
        setText(value);
        setIsSent(false);
    }

    return <PostContainer>
        <div>
            <Snackbar open={isSent} autoHideDuration={1200} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your post is send
                </Alert>
            </Snackbar>
            <Card sx={{ maxWidth: 800 ,textAlign:"left"}}>
                <CardHeader

                    avatar={
                        <MyLink to={{ pathname: '/users/' + userId }}>
                            <Avatar sx={{background:"linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white" }} aria-label="recipe">
                                {userName.charAt(0).toUpperCase()}
                            </Avatar>
                        </MyLink>
                    }

                    title= {<OutlinedInput
                        id = "outlined-adornment-amount"
                        multiline
                        placeholder = "Title"
                        value = {title}
                        inputProps = {{maxLength:25}}
                        fullWidth
                        onChange = {(i) => handleTitle(i.target.value)}>

                    </OutlinedInput>}
                />

                <CardContent>
                    <Typography variant="body2" clas>
                        <OutlinedInput
                            id = "outlined-adornment-amount"
                            multiline
                            placeholder = "Text"
                            inputProps = {{maxLength:256}}
                            fullWidth
                            value = {text}
                            onChange = {(i) => handleText(i.target.value)}
                            endAdornment={<InputAdornment position = "end">
                                <Button variant="contained"
                                        sx= {{background: "linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white"}}
                                        onClick={handleSubmit}
                                >POST</Button>
                            </InputAdornment>}>

                        </OutlinedInput>
                    </Typography>
                </CardContent>


            </Card>
        </div>

    </PostContainer>
}
export default PostForm;