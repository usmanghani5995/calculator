import React from 'react';
import {render} from 'react-dom';
import CalculatorBox from './calculatorBox.js';
import SupportBox from './supportBox.js';

var App = React.createClass({
	render() {
		return(
			<div id="app">
				<div>
					<CalculatorBox />
					kjkjh
				</div>
				<div>
					<SupportBox/>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('main'));
