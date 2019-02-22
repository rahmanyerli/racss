import React, { Component } from 'react'

class MenuButton extends Component {

	componentDidMount() {
		this.toggleMenuButton()
	}

	render() {
		return (
			<input type="checkbox" id="menu-button" className="icon icon-menu" />
		)
	}

	//Show or hide the menu button by window scroll position
	toggleMenuButton = () => {
		// Initial state
		var scrollPos = 0
		// adding scroll event
		window.addEventListener('scroll', function () {
			// detects new state and compares it with the new one
			let menubutton = document.getElementById("menu-button")

			if ((document.body.getBoundingClientRect()).top < scrollPos) {
				setTimeout(() => {
					menubutton.classList.remove("scale-1")
					menubutton.classList.add("scale-0")
				}, 100)
			}
			else {
				setTimeout(() => {
					menubutton.classList.remove("scale-0")
					menubutton.classList.add("scale-1")
				}, 100)
			}
			// saves the new position for iteration.
			scrollPos = (document.body.getBoundingClientRect()).top
		})
	}
}

export default MenuButton