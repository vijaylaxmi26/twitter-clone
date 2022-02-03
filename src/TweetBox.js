import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import {Avatar} from '@material-ui/core';

function TweetBox(){
    const [tweetMessage,setTweetMessage] = useState("");
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src={require('./cat.jpg')}  alt="somthing"/>
                    <input placeholder="What's happening" type = "text"/>
                </div>
                <input 
                   className='tweetBox__imageInput'
                   placeholder='Enter image URL' 
                   type = "text"
                />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}
 

export default TweetBox;