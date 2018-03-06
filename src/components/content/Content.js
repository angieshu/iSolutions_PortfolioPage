import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';

import './Content.css';
class Content extends Component {

	state = {
		need: true,
		challenge: false,
		solution: false,
	}

	handleClick(param) {
		let state = this.state;
		if (this.state[param] === true) {
			state[param] = false;
		} else {
			for (let key in state) {
				state[key] = false;
			}
			state[param] = true;
		}
		this.setState(state);
	}

	render() {
		return (
			<div className="content">
				<div className="content-element">
					<button><h2 onClick={() => this.handleClick('need')}>The Need</h2></button>
					<Collapse isOpened={this.state.need}>
						<p className={this.state.need}>
							NEED{this.props.need.text}
							{this.props.need.list.map(el => <li>{el}</li>)}
						</p>
					</Collapse>
				</div>

				<div className="content-element">
					<button><h2 onClick={() => this.handleClick('challenge')}>The Challenge</h2></button>
					<Collapse isOpened={this.state.challenge}>
						<p className={this.state.challenge}>
							CHALLENGE{this.props.challenge.text}
							{this.props.challenge.list.map(el => <li>{el}</li>)}
						</p>
					</Collapse>
				</div>
				<div className="content-element">
					<button><h2 onClick={() => this.handleClick('solution')}>The Solution</h2></button>
					<Collapse isOpened={this.state.solution}>
						<p className={this.state.solution}>
							SOLUTION{this.props.solution.text}
							{this.props.solution.list.map(el => <li>{el}</li>)}
						</p>
					</Collapse>
				</div>
			</div>
		);
	}
}

Content.propTypes = {
	need: PropTypes.object,
	challenge: PropTypes.object,
	solution: PropTypes.object,
};

Content.defaultProps = {
	need: {
		text: [	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum magna ac lobortis. Fusce lobortis egestas massa sit amet consequat. Pellentesque congue metus a quam ornare egestas. Sed eu ullamcorper sem. Ut pellentesque enim ac hendrerit maximus. Nullam quis elit eu risus dignissim sodales. Sed vitae odio ac magna posuere consectetur eget sit amet diam.",
				"Phasellus eget lorem aliquet, facilisis augue non, venenatis libero. Aliquam sed purus in tortor placerat dignissim non nec risus. Donec id augue sollicitudin, mollis augue a, lacinia elit. Phasellus ullamcorper turpis eget orci porttitor venenatis. Donec tincidunt fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim viverra, luctus dolor quis, finibus justo. Fusce tempor sit amet neque ac convallis."],
		list: ["Item One", "Item Two"]
	},
	challenge: {
		text: [	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum magna ac lobortis. Fusce lobortis egestas massa sit amet consequat. Pellentesque congue metus a quam ornare egestas. Sed eu ullamcorper sem. Ut pellentesque enim ac hendrerit maximus. Nullam quis elit eu risus dignissim sodales. Sed vitae odio ac magna posuere consectetur eget sit amet diam.",
				"Phasellus eget lorem aliquet, facilisis augue non, venenatis libero. Aliquam sed purus in tortor placerat dignissim non nec risus. Donec id augue sollicitudin, mollis augue a, lacinia elit. Phasellus ullamcorper turpis eget orci porttitor venenatis. Donec tincidunt fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim viverra, luctus dolor quis, finibus justo. Fusce tempor sit amet neque ac convallis."],
		list: ["Item One", "Item Two"]
	},
	solution: {
		text: [	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt dictum magna ac lobortis. Fusce lobortis egestas massa sit amet consequat. Pellentesque congue metus a quam ornare egestas. Sed eu ullamcorper sem. Ut pellentesque enim ac hendrerit maximus. Nullam quis elit eu risus dignissim sodales. Sed vitae odio ac magna posuere consectetur eget sit amet diam.",
				"Phasellus eget lorem aliquet, facilisis augue non, venenatis libero. Aliquam sed purus in tortor placerat dignissim non nec risus. Donec id augue sollicitudin, mollis augue a, lacinia elit. Phasellus ullamcorper turpis eget orci porttitor venenatis. Donec tincidunt fermentum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim viverra, luctus dolor quis, finibus justo. Fusce tempor sit amet neque ac convallis."],
		list: ["Item One", "Item Two"]
	},
}

export default Content;
