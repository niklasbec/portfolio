import React from 'react'
import Logo from "../../png/n.svg"
import Github from "../../png/github.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
            <img src={Logo} className="logo"/>
            <a className="github" href="https://github.com/niklasbec" target="_blank"><img src={Github} width="30px" height="30px" /></a>
            </div>
        </div>
    )
}
