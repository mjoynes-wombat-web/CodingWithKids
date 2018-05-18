import './style';
import { Component } from 'preact';

import './assets/styles/index.scss';

import Crab from './components/crab';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pincerActions: ['eating', 'waving', 'snapping' ],
			currentPincerAction: 'eating',
			walk: false,
			direction: 'left',
			inch: null,
			speed: 3,
			paused: false,
			moveTo: [50, 22],
			currentPos: [0, 0],
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.removePincerAction = this.removePincerAction.bind(this);
		this.walk = this.walk.bind(this);
		this.pauseWalking = this.pauseWalking.bind(this);
		this.changePincerAction = this.changePincerAction.bind(this);
	}

	componentDidMount() {
		if (inch) return null;
		const inchDiv = document.getElementById('inch');
		const inch = inchDiv.clientHeight;

		return this.setState({ inch });
	}

	removePincerAction() {
		console.log('this ran');
		this.setState({ currentPincerAction: null });
	}

	walk(e) {
		e.preventDefault();
		let direction;
		if (this.state.direction === 'right') direction = 'left';
		else direction = 'right';
		const moveTo = (direction === 'right' ? [50, 22] : [0, 0]);
		this.setState({ walk: true, direction, paused: false, currentPos: this.state.moveTo, moveTo });
	}

	pauseWalking(e) {
		e.preventDefault();
		this.setState({ paused: true });
	}

	changePincerAction() {
		let currentPincerAction = this.state.pincerActions[Math.floor(Math.random()*this.state.pincerActions.length)];
		return this.setState({ currentPincerAction })
	}

	render() {
		return (
			<main>
				<div id="inch"></div>
				<Crab
					walk={this.state.walk}
					pincerAction={this.state.currentPincerAction}
					changePincerAction={this.changePincerAction}
					direction={this.state.direction}
					width={this.state.inch}
					speed={this.state.speed}
					moveTo={this.state.moveTo}
					currentPos={this.state.currentPos}
					paused={this.state.paused}
					pauseWalking={this.pauseWalking}
					removePincerAction={this.removePincerAction} />
				<form>
					<button onClick={this.walk}>Walk {this.state.direction === 'right' ? 'Left' : 'Right'}</button>
				</form>
				<div>
					<h2>Crab State</h2>
					<p>Walking: {this.state.walk.toString()}</p>
					<p>Direction: {this.state.direction}</p>
					<p>Pincer Action: {this.state.currentPincerAction}</p>
				</div>
			</main>
		);
	}
}
