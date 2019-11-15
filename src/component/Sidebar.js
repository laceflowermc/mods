import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

class Sidebar extends React.Component {
	render() {
		return (
			<div className="Sidebar">
				<div className="Sidebar-header">
					<div>Mods</div>
				</div>
				<NavLink 
						to={this.props.path + '/wiki'}
						className="Sidebar-route-wrapper" 
						activeClassName="active"
					>
						<div className="Sidebar-route">
							<div>Gameplay Wiki</div>
						</div>
					</NavLink>
				<NavLink 
					to={this.props.path + '/api'}
					className="Sidebar-route-wrapper" 
					activeClassName="active"
				>
					<div className="Sidebar-route">
						<div>API Documentation</div>
					</div>
				</NavLink>
			</div>
		)
	}
}

export default Sidebar