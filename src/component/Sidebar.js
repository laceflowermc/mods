import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar(props) {
	return (
		<div className="Sidebar">
      <div className="Sidebar-header">
        <div>Mods</div>
      </div>
			{props.routes.map(route => (
				<Link to={route.path} className="Sidebar-route-wrapper">
					<div className="Sidebar-route">
						<div>{route.name}</div>
					</div>
					<FontAwesomeIcon className="Sidebar-dropdown-icon" icon={faChevronDown} />
				</Link>
			))}
		</div>
	)
}

export default Sidebar