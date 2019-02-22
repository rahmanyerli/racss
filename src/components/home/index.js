import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {

	// componentDidMount() {
	// 	document.getElementById("sidenav").style.display = "none"
	// 	document.getElementById("menu-button").style.display = "none"
	// }

	// componentWillUnmount() {
	// 	document.getElementById("sidenav").style.display = "inline-block"
	// 	document.getElementById("menu-button").style.display = "inline-block"
	// }

	render() {
		return (
			<section>
				<h1>
					RA-CSS
				</h1>
				<hr />
				<main>
					<section>
						<article>
							<main>
								<div className="jumbotron bg-secondary">
									<header>
										<h4 className="color-yellow">Simplicity is the ultimate sophistication.</h4>
										<br />
									</header>
									<main>
										<em className="color-white">
											Build your web projects with minimum effort by using RA-CSS. Customize your template easily just using LESS or
											SASS variables and mixins. Use or extend the prebuilt grid-systems and components.
										</em>
									</main>
								</div>
								<br />
								<section className="cols gap">
									<section className="span-3 padding-vertical text-center">
										<h5>Modern</h5>
										<em>CSS3 Less/Sass</em>
										<div className="padding">
											<img src="../images/modern.svg" alt="Modern" />
										</div>
										<hr />
									</section>
									<section className="span-3 padding-vertical text-center">
										<h5>Responsive</h5>
										<em>Mobile First</em>
										<div className="padding">
											<img src="../images/responsive.svg" alt="Responsive" />
										</div>
										<hr />
									</section>
									<section className="span-3 padding-vertical text-center">
										<h5>Open Source</h5>
										<em>GitHub</em>
										<div className="padding">
											<img src="../images/github.svg" alt="GitHub" />
										</div>
										<hr />
									</section>
									<section className="span-3 padding-vertical text-center">
										<h5>Modular</h5>
										<em>Partial CSS</em>
										<div className="padding">
											<img src="../images/modular.svg" alt="Modular" />
										</div>
										<hr />
									</section>
								</section>
							</main>
							<footer className="cols gap">
								<NavLink className="span-3 button lg bg-primary" to="/docs">Documentation</NavLink>
								<NavLink className="span-3 button lg bg-secondary" to="https://github.com/rahmanyerli/ra-css" target="_blank">Download</NavLink>
							</footer>
						</article>
					</section>
				</main>
			</section>
		)
	}
}

export default Home
