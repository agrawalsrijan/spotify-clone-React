import React from 'react'

import { useDataLayerValue } from "./DataLayer"

// Import styles
import "./Sidebar.css";

// import components
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);
    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="sidebar-logo-spotify"
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }

        </div>
    )
}

export default Sidebar
