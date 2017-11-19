import React from "react";

class Interval extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: null,
            timeoutId: null,
            component: null
        };
    }
    componentDidMount() {
        const intervalId = setInterval(() => {
            const timeoutId = setTimeout(() => {
                this.setState({
                    component: null,
                    timeoutId: null
                })
            }, this.props.time);
            this.setState({
                component: this.props.children,
                timeoutId
            });
        }, this.props.interval);
      this.setState({ intervalId });
    }
    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
        clearInterval(this.state.intervalId);
    }
    render() {
        return this.state.component;
    }
}

export default Interval;