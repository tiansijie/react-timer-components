import React from "react";
import debounce from "lodash.debounce";

class Debounce extends React.Component {
	state = { showChildren: false };
	onMouseMove = debounce(() => this.setState({ showChildren: true }), this.props.seconds * 1000);
	componentDidMount() {
		document.body.addEventListener("mousemove", this.onMouseMove);
	}
	componentWillUnmount() {
		document.body.removeEventListener("mousemove", this.onMouseMove);
	}
	render() {
		return this.state.showChildren ? this.props.chidren : null;
	}
}

