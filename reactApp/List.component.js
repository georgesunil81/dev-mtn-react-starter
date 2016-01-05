import React from "react";

var List = React.createClass({

	handleChange(event) {
		this.props.updateFoo(event.target.value);
	},

	render() {
		return (
			<div>
				<input onChange={this.handleChange}/>
			</div>

		)
		//return <p> {this.props.users[0].name} </p>
	}

});

export default List;



//Before lunch code


/*

import React from "react";

var List = React.createClass({

	render() {
		return (
			<div>
				<p>{this.props.firstUser.name}</p>
				<p>{this.props.secondUser.name}</p>




			</div>

		)
		//return <p> {this.props.users[0].name} </p>
	}

});

export default List;

*/