import React from 'react'
import './Header.css'

function Header(props) {
	return (
		<div className="Header">
			<div className="Header-title">
				<div>Blake's Mods</div>
			</div>
			<div className="Header-nav">
				<div className="Header-nav-item">
					<a href="https://www.curseforge.com/members/blakebr0/projects" target="_blank" rel="noopener noreferrer">CurseForge</a>
				</div>
				<div className="Header-nav-item">
					<a href="https://github.com/BlakeBr0" target="_blank" rel="noopener noreferrer">Github</a>
				</div>
			</div>
		</div>
	)
}

export default Header