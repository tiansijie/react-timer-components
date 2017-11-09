import React from "react";
import debounce from "lodash.debounce";
import uniquePropHOC from "./lib/unique-prop-hoc";

class Debounce extends React.Component {
	constructor() {
		super();
		this.state = { component: null };
		this.onMouseMove = debounce(this.onMouseMove(this.props.time || this.props.seconds * 1000));
	}
	onMouseMove() {
		this.setState({ component: this.props.children });
	}
	componentDidMount() {
		document.body.addEventListener("mousemove", this.onMouseMove);
	}
	componentWillUnmount() {
		document.body.removeEventListener("mousemove", this.onMouseMove);
	}
	render() {
		return this.state.component;
	}
}

export default uniquePropHOC(["time", "seconds"])(Debounce);

