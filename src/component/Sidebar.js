import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar">
				<div className="Sidebar-header">
					<div>Mods</div>
				</div>
				{this.props.routes.map((route, index) => (
					<NavLink 
						key={index}
						to={route.path}
						exact={route.exact} 
						className="Sidebar-route-wrapper" 
						activeClassName="active"
					>
						<div className="Sidebar-route">
							<div>{route.name}</div>
						</div>
						<FontAwesomeIcon className="Sidebar-dropdown-icon" icon={faChevronDown} />
					</NavLink>
				))}
			</div>
		)
	}
}

export default Sidebar