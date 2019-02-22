import React, { Component } from 'react'

class NotFound extends Component {

	constructor(props) {
		super(props)
		this.goBack = this.goBack.bind(this)
	}

	goBack() {
		this.props.history.goBack()
	}

	render() {
		return (
			<React.Fragment>
				<h2>404 - Page Not Found!</h2>
				<hr />
				<em>
					The page you are looking for does not exist!
				</em>
				<br />
				<br />
				<button className="bg-primary w-10" type="button" onClick={this.goBack}>Go back</button>
			</React.Fragment>
		)
	}
}

export default NotFound