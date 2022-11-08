import {Component} from "react";


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 25}
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        console.log("snapshot", snapshot);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a === 5) {
            return "Snapshot!!"
        }
        return null
    }

    //render() will be updated if changed: 1)new props, 2)setState(), 3)forceUpdate()
    render() {
        console.log("render");
        return (
            <div>
                Hello from ClassComponent!
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <div>Props: {this.props.name}</div>
                <button onClick={() => this.inc()}>increment</button>
            </div>
        )
    }

    inc() {
        this.setState(prev => ({...prev, a: prev.a + 1}))
    }
}

export {ClassComponent}