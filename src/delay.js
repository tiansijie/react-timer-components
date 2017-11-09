import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

class Delay extends React.Component {
    constructor() {
        super();
        this.state = {
            component: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: this.props.children
            })
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Delay);
