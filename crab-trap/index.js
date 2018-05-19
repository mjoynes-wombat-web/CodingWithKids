import { Component } from 'react';
import Helmet from 'react-helmet';

import './assets/styles/index.scss';

import Crab from './components/crab';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pincerActions: ['eating', 'waving', 'snapping' ],
			currentPincerAction: 'eating',
			walk: false,
			walkTime: 0,
			direction: 'left',
			inch: null,
			difficulty: 1,
			paused: false,
			currentPos: [0, 0],
			fullscreen: false,
			gameInit: false,
			hidingSpots: [],
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.initGame = this.initGame.bind(this);
		this.enterFullscreen = this.enterFullscreen.bind(this);
		this.removePincerAction = this.removePincerAction.bind(this);
		this.walk = this.walk.bind(this);
		this.pauseWalking = this.pauseWalking.bind(this);
		this.changePincerAction = this.changePincerAction.bind(this);
		this.pickSpot = this.pickSpot.bind(this);
	}

	componentDidMount() {
		const inch = document.getElementById('inch').clientHeight;
		return this.setState({ inch });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.initGame);
	}

	initGame() {
		if (!this.state.fullscreen) return this.setState({
			hidingSpots: [],
			hidingSpotWidth: null,
			crabDimensions: null,
			gameInit: false,
		});
		const crab  = document.querySelector('.crab');
		const crabDimensions = [ crab.clientWidth, crab.clientHeight ];
		const shellDimensions = crab.querySelector('.shell').getBoundingClientRect();
		const cols = Math.floor(window.innerWidth / (shellDimensions.width * 3));
		const rows = Math.floor(window.innerHeight / (shellDimensions.height * 3));

		const hidingSpots = [];
		for(let x = 0; x < cols; x++) {
			const colWidth = window.innerWidth / cols;
			const colCenter = (colWidth / 2) + (colWidth * (x + 1)) - colWidth;
			let colGroup = []

			for(let i = 0; i < rows; i++) {
				const rowHeight = window.innerHeight / rows;
				const rowCenter = (rowHeight / 2) + (rowHeight * (i + 1)) - rowHeight;
				const spot = {
					coords: [
						colCenter,
						rowCenter,
					],
					hidable: (Math.random() * this.state.difficulty > 0.66 ? true : false),
				};
				colGroup.push(spot);
			}

			hidingSpots.push(colGroup);
		}
		return this.setState({
			hidingSpots,
			hidingSpotWidth: shellDimensions.width,
			crabDimensions,
			gameInit: true,
		});
	}

	enterFullscreen(e) {
		e.preventDefault();

		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
			return this.setState({ fullscreen: false });
		}
		
		const main = document.querySelector('main');
		main.webkitRequestFullscreen();
		window.addEventListener('resize', this.initGame);
		return this.setState({ fullscreen: true });
	}

	removePincerAction() {
		this.setState({ currentPincerAction: null });
	}

	pickSpot() {
		const { hidingSpots } = this.state;
		const cols = hidingSpots.length;
		const rows = hidingSpots[0].length;
		const spot = hidingSpots[Math.floor(Math.random()*cols)][Math.floor(Math.random()*rows)];

		if (spot.hidable) return spot;
		return this.pickSpot();
	}

	walk(e) {
		e.preventDefault();
		const spot = this.pickSpot();
		const moveTo = [
			spot.coords[0] - (this.state.crabDimensions[0] / 2),
			spot.coords[1] - (this.state.crabDimensions[1] / 2),
		]

		const walkTime = Math.pow(
			Math.pow(
				Math.abs(this.state.currentPos[0] - moveTo[0]),
				2)
			+ Math.pow(
				Math.abs(this.state.currentPos[1] - moveTo[1]),
			2),
			0.5)
		/ this.state.inch / 3 / this.state.difficulty;

		console.log(walkTime);
		console.log(moveTo);
		console.log(this.state.currentPos);

		const direction = (this.state.currentPos[0] <= moveTo[0] ? 'right' : 'left')

		if (moveTo[0] === this.state.currentPos[0] && moveTo[1] === this.state.currentPos[1]) return null;
		return this.setState({
			walk: true,
			direction,
			paused: false,
			moveTo,
			walkTime,
		});
	}

	pauseWalking(e) {
		e.preventDefault();
		this.setState({ paused: true, currentPos: this.state.moveTo });
	}

	changePincerAction() {
		let currentPincerAction = this.state.pincerActions[Math.floor(Math.random()*this.state.pincerActions.length)];
		return this.setState({ currentPincerAction })
	}

	render() {
		return (
			<main className={this.props.className}>
				<Helmet
					title="Crab Trap"
				/>
				<div className="grid">
					{this.state.hidingSpots.map(col => (
						<div className="column">
						{col.map(row =>(
							<div className="row">
									{row.hidable
										? <div className="hiding-spot" style={`width: ${this.state.hidingSpotWidth + 20}px`}></div>
										: null
									}
								</div>
						))}
					</div>
					))}
				</div>
				<div id="inch"></div>
				<Crab
					walk={this.state.walk}
					walkTime={this.state.walkTime}
					pincerAction={this.state.currentPincerAction}
					changePincerAction={this.changePincerAction}
					direction={this.state.direction}
					width={this.state.inch}
					difficulty={this.state.difficulty}
					moveTo={this.state.moveTo}
					currentPos={this.state.currentPos}
					paused={this.state.paused}
					pauseWalking={this.pauseWalking}
					inch={this.state.inch}
					removePincerAction={this.removePincerAction} />
				<form>
					{this.state.fullscreen 
						? <button onClick={this.walk}>Walk</button>
						: null
					}
					<button onClick={this.enterFullscreen}>{this.state.fullscreen ? 'Exit' : 'Enter'} Fullscreen</button>
				</form>
				<div class="state">
					<h2>Crab State</h2>
					<div className="details">
						<p>Walking: {this.state.walk && this.state.paused ? 'paused' : this.state.walk.toString()}</p>
						<p>Direction: {this.state.direction}</p>
						<p>Pincer Action: {this.state.currentPincerAction}</p>
						<p>Game Difficulty: {this.state.difficulty}</p>
						<p>Move To: {this.state.moveTo
							? `X(${this.state.moveTo[0]}) Y(${this.state.moveTo[1]})`
							: null}
						</p>
						<p>Fullscreen: {this.state.fullscreen.toString()}</p>
						<p>Game Init: {this.state.gameInit.toString()}</p>
					</div>
				</div>
			</main>
		);
	}
}
