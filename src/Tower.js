import React from 'react';
import './App.css';

class Tower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stackA: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
            stackB: [],
            stackC: [],
        }
    }


    render() {

        function reset() {
            this.setState({
                stackA: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                stackB: [],
                stackC: [],
            })
        }

        return (
            <div className="Tower">
                <div className="stack" id="stackA">
                    <div className="pole"></div>
                </div>
                <div className="stack" id="stackB">
                    <div className="pole"></div>
                </div>
                <div className="stack" id="stackC">
                    <div className="pole"></div>
                </div>
            </div>
        )
    };
}

export default Tower;
