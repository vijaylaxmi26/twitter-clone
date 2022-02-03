import React,{forwardRef} from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import "./Post.css";

//require('./cat.jpg')

const Post = forwardRef(({
  displayName,
  username,
  verified,
  timestap,
  text,
  image,
  avatar,
},ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} alt={displayName}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="somthing" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
