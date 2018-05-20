import { Component } from 'react';
import FAIcon from '@fortawesome/react-fontawesome';
import faCompress from '@fortawesome/fontawesome-pro-light/faCompress';
import faExpand from '@fortawesome/fontawesome-pro-light/faExpand';
import faWalking from '@fortawesome/fontawesome-pro-light/faWalking';

import './assets/styles/index.scss';

import Crab from './components/crab';
import PleaseRotate from './components/pleaseRotate';
import StartGame from './components/startGame';
import { CrabSVG } from './components/crab';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pincerActions: ['eating', 'waving', 'snapping' ],
			currentPincerAction: 'eating',
			walking: false,
			walkTime: 0,
			direction: 'left',
			inch: null,
			difficulty: 2,
			paused: false,
			currentPos: [0, 0],
			fullscreen: false,
			gameInit: false,
			hidingSpots: [],
			rotate: false,
			points: 0,
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.initGame = this.initGame.bind(this);
		this.enterFullscreen = this.enterFullscreen.bind(this);
		this.removePincerAction = this.removePincerAction.bind(this);
		this.walk = this.walk.bind(this);
		this.pauseWalking = this.pauseWalking.bind(this);
		this.changePincerAction = this.changePincerAction.bind(this);
		this.pickSpot = this.pickSpot.bind(this);
		this.setHidable = this.setHidable.bind(this);
		this.setRotation = this.setRotation.bind(this);
		this.startGame = this.startGame.bind(this);
		this.addPoint = this.addPoint.bind(this);
	}

	componentDidMount() {
		document.title = 'Crab Trap';
		let rotate = false;
		this.setRotation();
		window.addEventListener('resize', this.setRotation);
		const inch = document.getElementById('inch').clientHeight;
		return this.setState({ inch, screenWidth: screen.width });
	}

	setRotation() {
		if(screen.orientation.type.includes('portrait')) return this.setState({ rotate: true });
		return this.setState({ rotate: false });
	}

	initGame() {
		const crab  = document.getElementById('crab');
		const crabDimensions = [ crab.clientWidth, crab.clientHeight ];
		console.log(crabDimensions);
		const shellDimensions = crab.querySelector('.shell').getBoundingClientRect();
		const cols = Math.floor(screen.width / Math.max(shellDimensions.width * Math.round(5 - this.state.difficulty / 1.75), (shellDimensions.width * 2)));
		const rows = Math.floor(
			screen.height / Math.max(
				shellDimensions.height
				* Math.round(6 - this.state.difficulty / 1.75), 
				(shellDimensions.height * 4)
			)
		);

		const maxCrabs = 10;
		const minCrabs = 2;

		const numCrabs = this.state.difficulty;

		const crabsMoving = Math.max(
			Math.round(numCrabs * Math.random() * 0.9),
			Math.round(numCrabs / 2)
		);

		
		const hidingSpots = [];
		for(let x = 0; x < cols; x++) {
			const colWidth = screen.width / cols;
			const colCenter = (colWidth / 2) + (colWidth * (x + 1)) - colWidth;
			let colGroup = []

			for(let i = 0; i < rows; i++) {
				const rowHeight = screen.height / rows;
				const rowCenter = (rowHeight / 2) + (rowHeight * (i + 1)) - rowHeight;
				const spot = {
					coords: [
						colCenter,
						rowCenter,
					],
				};
				colGroup.push(spot);
			}
			hidingSpots.push(colGroup);
		}
		setTimeout(this.walk, 3000);
		return this.setState({
			hidingSpots: this.setHidable(hidingSpots),
			hidingSpotWidth: shellDimensions.width,
			numCrabs,
			crabsMoving,
			crabDimensions,
			gameInit: true,
		});
	}

	setHidable(spots) {
		let percentHidden = 0;
		const numCols = spots.length;
		const numRows = spots[0].length
		const minPercent = Math.min(0.5 * Math.max(this.state.difficulty * 0.33, 1), 1);
		const maxPercent = Math.min(0.66 * Math.max(this.state.difficulty * 0.33, 1), 1);
		for(let i = 0; i < numCols; i++) {
			for(let x = 0; x < numRows; x++) {
				if ((percentHidden + (1 / (numCols * numRows))) >= maxPercent) return spots;
				const isHidden = (Math.random() * this.state.difficulty > 0.66 ? true : false);
				spots[i][x].hideable = isHidden;
				if (isHidden) { percentHidden += (1 / (numCols * numRows)); }
			}
		}
		if(percentHidden < minPercent) return this.setHidable(spots);
		return spots;
	}

	enterFullscreen(e) {
		e.preventDefault();

		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
			return this.setState({ fullscreen: false });
		}
		
		const main = document.querySelector('main');
		main.webkitRequestFullscreen();
		
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

		if (spot.hideable) return spot;
		return this.pickSpot();
	}

	walk() {
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
		/ (this.state.inch * this.state.difficulty);

		const direction = (this.state.currentPos[0] <= moveTo[0] ? 'right' : 'left')

		if (moveTo[0] === this.state.currentPos[0] && moveTo[1] === this.state.currentPos[1]) return this.walk();
		console.log('walk called');
		return this.setState({
			walking: true,
			direction,
			paused: false,
			moveTo,
			walkTime,
		});
	}

	pauseWalking() {
		this.setState({ paused: true, currentPos: this.state.moveTo });
	}

	changePincerAction() {
		let currentPincerAction = this.state.pincerActions[Math.floor(Math.random()*this.state.pincerActions.length)];
		return this.setState({ currentPincerAction })
	}

	startGame(e) {
		this.enterFullscreen(e);
		this.initGame(e);
	}

	addPoint(e) {
		console.log('crab clicked');
		this.setState({ points: this.state.points + 1 });
	}

	render() {
		return (
			<main className={this.props.className}>
				<div id="inch"></div>
				<CrabSVG id="crab" className="crab" width={this.state.inch} screenWidth={this.state.screenWidth} />
				{this.state.rotate ? <PleaseRotate /> : null}
				{!this.state.fullscreen && !this.state.rotate ? <StartGame startGame={this.startGame}/> : null}
				{!this.state.rotate && this.state.fullscreen && this.state.gameInit 
					? (
						<div id="gameBoard">
							<div className="grid">
								{this.state.hidingSpots.map(col => (
									<div className="column">
									{col.map(row =>(
										<div className="row">
												{row.hideable
													? <div
														onClick={(e) => { e.stopPropagation(); console.log('this ran');}}
														className="hiding-spot"
														style={`
														width: ${this.state.hidingSpotWidth + 20}px;
														height: ${(this.state.hidingSpotWidth * 1.25) + 20}px;
														`} />
													: null
												}
											</div>
									))}
								</div>
								))}
							</div>
							<div className="buttons">
								<button onClick={this.enterFullscreen}>
									{this.state.fullscreen
										? <FAIcon icon={faCompress} />
										: <FAIcon icon={faExpand} />
									}
								</button>
							</div>
							<Crab
								addPoint={this.addPoint}
								walk={this.walk}
								walking={this.state.walking}
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
								screenWidth={this.state.screenWidth}
								removePincerAction={this.removePincerAction} />
							<div class="state">
								<h2>Crab State</h2>
								<div className="details">
									<p>Walking: {this.state.walking && this.state.paused ? 'paused' : this.state.walking.toString()}</p>
									<p>Direction: {this.state.direction}</p>
									<p>Pincer Action: {this.state.currentPincerAction}</p>
									<p>Game Difficulty: {this.state.difficulty}</p>
									<p>Move To: {this.state.moveTo
										? `X(${this.state.moveTo[0]}) Y(${this.state.moveTo[1]})`
										: null}
									</p>
									<p>Fullscreen: {this.state.fullscreen.toString()}</p>
									<p>Game Init: {this.state.gameInit.toString()}</p>
									<p>Rotation: {this.state.rotate.toString()}</p>
									<p> Points: {this.state.points}</p>
								</div>
							</div>
						</div>
					)
					: null
				}
			</main>
		);
	}
}
