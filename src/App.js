import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SideMenu from './components/side-menu'
import MenuButton from './components/menu-button'
import Home from './components/home'
import Docs from './components/docs'
import NotFound from './components/not-found'
import Ra from './js/ra'
import './css/prism.css'

class App extends Component {

	componentDidMount() {
		const ra = new Ra();
		ra.init();
	}

	render() {
		return (
			<Router>
				<main>
					<MenuButton />
					<section id="sidenav">
						<SideMenu>
						</SideMenu>
					</section>
					<section>
						<header id="header"></header>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route path="/docs" component={Docs} />
							<Route path="/semantics" component={NotFound} />
							<Route path="/containers" component={NotFound} />
							<Route path="/grids" component={NotFound} />
							<Route component={NotFound} />
						</Switch>
					</section>
				</main>
			</Router>
		)
	}
}

export default App
