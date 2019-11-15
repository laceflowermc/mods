import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import './MysticalAgriculture.css'

class MysticalAgriculture extends React.Component {
	render() {
		return (
			<div className="MysticalAgriculture">
				<Switch>
					<Route exact path={this.props.match.path}>
						Mystical Agriculture is the peak of enjoyable gameplay
          </Route>
          <Route path={this.props.match.path + '/api'}>
            THIS IS THE API DOCUMENTATION FOR THIS MOD
          </Route>
          <Route path={this.props.match.path + '/wiki'}>
            THIS IS THE GAMEPLAY DOCUMENTATION FOR THIS MOD
          </Route>
				</Switch>
			</div>
		)
	}
}

export default withRouter(MysticalAgriculture)