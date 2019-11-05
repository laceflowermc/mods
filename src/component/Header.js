import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<div className="Header-title">
					<div>Blake's Mods</div>
				</div>
				<div className="Header-nav">
					<div className="Header-nav-item">
						<a>Mods <FontAwesomeIcon icon={faChevronDown} /></a>
					</div>
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
}

export default Header