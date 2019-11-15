import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<div className="Header-title">
					<NavLink exact to="/" className="Header-title-link">
						<div>Blake's Mods</div>
					</NavLink>
				</div>
				<div className="Header-nav">
					<div className="Header-nav-item">
						<div className="Header-nav-item-content">Mods <FontAwesomeIcon icon={faChevronDown} /></div>
						<div className="Header-nav-item-mods-dropdown">
							{this.props.routes.slice(1).map((route, index) => (
								<NavLink 
									key={index}
									to={route.path}
									className="Header-nav-item-mods-dropdown-mod"
								>
									<img src={route.icon} alt={route.name} /><div>{route.name}</div>
								</NavLink>
							))}
						</div>
					</div>
					<div className="Header-nav-item">
						<a href="https://www.curseforge.com/members/blakebr0/projects" className="Header-nav-item-content" target="_blank" rel="noopener noreferrer">CurseForge</a>
					</div>
					<div className="Header-nav-item">
						<a href="https://github.com/BlakeBr0" className="Header-nav-item-content" target="_blank" rel="noopener noreferrer">Github</a>
					</div>
				</div>
			</div>
		)
	} 
}

export default Header