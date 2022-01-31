import { Button } from '@material-ui/core';
import React from 'react';
import "./TweetBox.css";
import {Avatar} from '@material-ui/core';

function TweetBox(){
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fcat%2F&psig=AOvVaw1zsj2h1vkF1ki43LjoVAR_&ust=1643702784218000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDzlpfE2_UCFQAAAAAdAAAAABAD"/>
                    
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
}
 

export default TweetBox;