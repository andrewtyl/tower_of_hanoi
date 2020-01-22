import React from 'react';
import './App.css';

class Tower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stackA: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
            stackB: [],
            stackC: [],
            a: {onTop: true, size: 1},
            b: {onTop: false, size: 2},
            c: {onTop: false, size: 3},
            d: {onTop: false, size: 4},
            e: {onTop: false, size: 5},
            f: {onTop: false, size: 6},
            g: {onTop: false, size: 7},
            h: {onTop: false, size: 8},
            i: {onTop: false, size: 9},
            j: {onTop: false, size: 10},
            selectedStack: 0
        }
    }


    render() {

        function reset() {
            this.setState({
                stackA: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                stackB: [],
                stackC: [],
                a: {onTop: true, size: 1},
                b: {onTop: false, size: 2},
                c: {onTop: false, size: 3},
                d: {onTop: false, size: 4},
                e: {onTop: false, size: 5},
                f: {onTop: false, size: 6},
                g: {onTop: false, size: 7},
                h: {onTop: false, size: 8},
                i: {onTop: false, size: 9},
                j: {onTop: false, size: 10},
                selectedStack: 0
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
