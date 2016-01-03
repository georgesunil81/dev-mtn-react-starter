import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				Cheesy line about learning react!
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
