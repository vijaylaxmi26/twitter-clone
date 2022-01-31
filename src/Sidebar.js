import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from '@material-ui/core';

function Sidebar(){
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="siderbar__twitterIcon"/>

            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Message" Icon={MessageIcon}/>
            <SidebarOption text="Bookmark" Icon={BookmarkIcon}/>
            <SidebarOption text="Lists" Icon={ListIcon}/>
            <SidebarOption text="Profile" Icon={PersonIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            

            {/* Button->tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>


        </div>
    );
}


export default Sidebar;