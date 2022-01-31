import { Avatar } from '@material-ui/core';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

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
                <Avatar />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Varun 
                            <span>
                                <VerifiedIcon className="post__badge"/>@varun327829
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Somthing Done with effort is more imprasive then money</p>
                    </div> 
                </div>
                <img src="./cat.jpg" alt="somthing"/> 
            </div>
        </div>
    );
}

 
export default Post;