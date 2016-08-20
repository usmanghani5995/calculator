var React = require('react');
var Result = require('./result.js');
var Menus = require('./menus.js');
var KeyPad = require('./keyPad.js');

var CalculatorBox = React.createClass({
    render: function () {
        return(
            <div id="calculatorBox">
                <div className="result">
                    <Result/>
                </div>
                <div className="menus">
                    <Menus/>
                </div>
                <div className="keypad">
                    <KeyPad/>
                </div>
            </div>
        );
    }
});

export default CalculatorBox;
