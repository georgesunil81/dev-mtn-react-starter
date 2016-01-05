//

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.component';

var App = React.createClass({

	getInitialState() {
		return {
			foo: ""
		}
	},

	updateFoo(string) {
		console.log("updating");
		this.setState({
			foo: string;
		})

	}

	handleClick() {
		this.setState({
			foo: this.state.foo.concat([this.state.foo.length + 1])
		})
	},

	render() {

		return (
			<div>
				<div onClick={this.updateFoo}>Foo</div>
				<List firstUser = {this.state.foo[0]} secondUser= {this.state.foo[1]}/>
			</div>
		)
	}
});

/*class App extends React.Component {
	render() {
		return (
			<div>
				Cheesy line about learning react!
			</div>
		)
	}
}*/

ReactDOM.render(<App />, document.getElementById("app"));



//Before lunch code
/*

import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.component';

var App = React.createClass({

	getInitialState() {
		return {
			foo: [{name:"Daniel"}, {name:"Jason"}]
		}
	},

	handleClick() {
		this.setState({
			foo: this.state.foo.concat([this.state.foo.length + 1])
		})
	},

	render() {

		return (
			<div>
				<div onClick={this.handleClick}>Foo</div>
				<List firstUser = {this.state.foo[0]} secondUser= {this.state.foo[1]}/>
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app")); */
