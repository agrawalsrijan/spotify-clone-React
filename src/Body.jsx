import React from 'react'

import { useDataLayerValue } from "./DataLayer"

// import styles
import "./Body.css"

import PlayCircleFilledIcon from  "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import Header from "./Header"
import SongRow from "./SongRow"

function Body({ spotify }) {

    const [{ discover_weekly}, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcRg4VdFCH2SM`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img 
                    src={discover_weekly?.images[0]?.url} 
                    alt="discover-weekly-image"
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h4>Discover weekly</h4>
                    <p> {discover_weekly?.description} </p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        onClick={playPlaylist} 
                        className="body__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon/>
                </div>
                {/* list of songs */}

                {
                    discover_weekly?.tracks.items.map(item => {
                        return(
                            <SongRow playSong={playSong} track={item.track} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Body
