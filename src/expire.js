import React from "react";
export default class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        if (this.props.time) {
            setTimeout(() => {
                this.setState({
                    component: null
                });
            }, this.props.time);
        }
        else {
            this.setState({
                component: null
            });
        }
    }
    render() {
        return this.state.component;
    }
}