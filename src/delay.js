import React from "react";

export default class Delay extends React.Component {
    constructor() {
        super();
        this.state = {
            component: null
        };
    }
    componentDidMount() {
        if (this.props.time) {
            setTimeout(() => {
                this.setState({
                    component: this.props.children
                })
            }, this.props.time);
        }
        else {
            this.setState({
                component: this.props.children
            });
        }
    }
    render() {
        return this.state.component;
    }
}