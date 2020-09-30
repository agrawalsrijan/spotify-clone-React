import React from 'react'

import { useDataLayerValue } from "./DataLayer"

import "./Header.css"

import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'

function Header() {

    const [{ user, token }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input
                    placeholder="Search for Songs, Artists and Albums"
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
