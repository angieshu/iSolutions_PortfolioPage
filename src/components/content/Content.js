import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import ReactInterval from 'react-interval';

import './Content.css';

// imgs
import dots from '../../img/sq.png';


class Content extends Component {

	state = {
		tick: 1,
		need: true,
		challenge: false,
		solution: false,
		needBtn: 'btn-open',
		challengeBtn: 'btn-close',
		solutionBtn: 'btn-close'
	}

	constructor(props) {
		super(props);

		this.i = 0;
	}

	handleClick(param) {
		let state = this.state;
		if (this.state[param] === true) {
			state[param] = false;
			state[param + 'Btn'] = 'btn-close';
		} else {
			for (let key in state) {
				console.log(key, 1);
				if(key.indexOf('Btn') >= 0) state[key] = 'btn-close';
				else state[key] = false;
				console.log(key, 2);
			}
			state[param] = true;
			state[param + 'Btn'] = 'btn-open';
			if (param === 'need') this.i = 2;
			else if (param === 'challenge') this.i = 3;
			else this.i = 1;
		}
		this.setState(state);
	}

	callbackFunc() {
		if (this.state.tick % 7 === 0 && this.state.tick != 0) {
			if (this.i === 1) {
				this.handleClick('challenge')
				this.i = this.i + 1;
			} else if (this.i === 2) {
				this.handleClick('solution');
				this.i = this.i + 1;
			} else {
				this.handleClick('need');
				this.i = 1;
			}
		}

		if (this.state.tick === 999) {
			this.setState({ tick: 0 });
		} else {
			this.setState({ tick: this.state.tick + 1 });
		}
	}

	render() {
		return (
			<div className="content">
				<ReactInterval
				timeout={1000}
				enabled={true}
				callback={this.callbackFunc.bind(this)}
				/>
				<div className="content-element">
					<button className="content-element-btn" onClick={() => this.handleClick('need')}>
						<img className={this.state.needBtn} src={dots} alt="" />
						<h2>The Need</h2>
					</button>
					<Collapse isOpened={this.state.need}>
						<p className="content-element-text">
							NEED{this.props.need.text}
							{this.props.need.list.map(el => <li>{el}</li>)}
						</p>
					</Collapse>
				</div>

				<div className="content-element">
					<button className="content-element-btn" onClick={() => this.handleClick('challenge')}>
						<img className={this.state.challengeBtn} src={dots} alt="" />
						<h2>The Challenge</h2>
					</button>
					<Collapse isOpened={this.state.challenge}>
						<p className="content-element-text">
							CHALLENGE{this.props.challenge.text}
							{this.props.challenge.list.map(el => <li>{el}</li>)}
						</p>
					</Collapse>
				</div>
				<div className="content-element">
					<button className="content-element-btn" onClick={() => this.handleClick('solution')}>
						<img className={this.state.solutionBtn} src={dots} alt="" />
						<h2>The Solution</h2>
					</button>
					<Collapse isOpened={this.state.solution}>
						<p className="content-element-text">
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
