import './style';
import { Component } from 'preact';
import Helmet from 'preact-helmet';

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
			fullscreen: false,
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.initGame = this.initGame.bind(this);
		this.enterFullscreen = this.enterFullscreen.bind(this);
		this.removePincerAction = this.removePincerAction.bind(this);
		this.walk = this.walk.bind(this);
		this.pauseWalking = this.pauseWalking.bind(this);
		this.changePincerAction = this.changePincerAction.bind(this);
	}

	componentDidMount() {
		const inch = document.getElementById('inch').clientHeight;
		return this.setState({ inch });
	}

	initGame() {
		console.log('this ran');
		const shellDimensions = document.querySelector('.crab .shell').getBoundingClientRect();
		const cols = Math.floor(window.innerWidth / (shellDimensions.width * 3));
		const rows = Math.floor(window.innerHeight / (shellDimensions.height * 3));

		const hidingSpots = [];
		for(let x = 0; x < cols; x++) {
			const colWidth = window.innerWidth / cols;
			const colCenter = (colWidth / 2) + (colWidth * (x + 1)) - colWidth;

			for(let i = 0; i < rows; i++) {
				const rowHeight = window.innerHeight / rows;
				const rowCenter = (rowHeight / 2) + (rowHeight * (i + 1)) - rowHeight;
				const spot = [
					colCenter,
					rowCenter,
				];
				hidingSpots.push([spot]);
			}
		}
		return this.setState({ cols, rows, hidingSpots, hidingSpotWidth: shellDimensions.width });
	}

	enterFullscreen(e) {
		e.preventDefault();

		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
			return this.setState({ fullscreen: false });
		}
		
		const main = document.querySelector('main');
		main.webkitRequestFullscreen();
		this.initGame();
		return this.setState({ fullscreen: true });
	}

	removePincerAction() {
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
				<Helmet
					title="Crab Trap"
					meta={[
						{ name: "viewport", content: "width=device-width, initial-scale=1" },
					]}
				/>
				<div className="grid">
					{Array.from(
						{length: this.state.cols},
						(a, i) => (
							<div className="column">
								{Array.from(
									{length: this.state.rows},
									(b, x) => (
										<div className="row">
											<div className="hiding-spot"></div>
										</div>
									)
								)}
							</div>
						)
					)}
				</div>
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
					<button onClick={this.enterFullscreen}>{this.state.fullscreen ? 'Exit' : 'Enter'} Fullscreen</button>
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
