import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {Link} from "react-router-dom";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({

    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
function Post(props){
    const {title,text,userName,userId} = props;
    const [expanded, setExpanded] = React.useState(false);
    const [liked,setLiked] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleLike =() =>{
        setLiked((!liked))
    };
    return <PostContainer>
        <Card sx={{ maxWidth: 800 ,textAlign:"left"}}>
            <CardHeader

                avatar={
                <MyLink to={{ pathname: '/users/' + userId }}>
                    <Avatar sx={{background:"linear-gradient(45deg,#2196F3 30%, #21CBF3 90%)", color: "white" }} aria-label="recipe">
                        {userName.charAt(0).toUpperCase()}
                    </Avatar>
                    </MyLink>
                }

                title= {title}
            />

            <CardContent>
                <Typography variant="body2" clas>
                    {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleLike}>

                    <FavoriteIcon style={ liked? {color:"red"} : null }/>
                </IconButton>
                <ExpandMore sx = {{transform:"rotate(0deg"}}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <CommentIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                </CardContent>
            </Collapse>
        </Card>
        </PostContainer>
}
export default Post;