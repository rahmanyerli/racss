import React, { Component } from 'react'
import Nav from '../nav';

class SideMenu extends Component {

	componentDidMount() {
		const sideMenu = document.getElementById("aside")
		sideMenu.addEventListener("click", () => {
			const menuButton = document.getElementById("menu-button")
			menuButton.click()
		})
	}

	render() {
		return (
			<aside id="aside">
				<Nav />
			</aside>
		)
	}
}

export default SideMenu
