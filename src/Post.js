import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import "./Post.css";

function Post({
    displayName,
    username,
    verified,
    timestap,
    text,
    image,
    avatar
    
}){
    return  (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src={require('./cat.jpg')}  alt="somthing"/>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Varun 
                            <span className='post__headerSpecial'>
                                <VerifiedIcon className="post__badge"/>@varun327829
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Somthing Done with effort is more imprasive then money</p>
                    </div> 
                </div>
                <img src={require('./cat.jpg')}  alt="somthing"/> 
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    );
}

 
export default Post;