import { Component } from 'react';
import FAIcon from '@fortawesome/react-fontawesome';
import faCompress from '@fortawesome/fontawesome-pro-light/faCompress';
import faExpand from '@fortawesome/fontawesome-pro-light/faExpand';
import faWalking from '@fortawesome/fontawesome-pro-light/faWalking';

import './assets/styles/index.scss';

import Crab from './components/crab';
import PleaseRotate from './components/pleaseRotate';
import StartGame from './components/startGame';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inch: null,
			difficulty: 1,
			fullscreen: false,
			gameInit: false,
			hidingSpots: [],
			rotate: false,
			points: 0,
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.initGame = this.initGame.bind(this);
		this.enterFullscreen = this.enterFullscreen.bind(this);
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

	startGame(e) {
		this.enterFullscreen(e);
		this.initGame(e);
	}

	addPoint(e) {
		const points = this.state.points + 1;
		if (Math.ceil(points / 10) > this.state.difficulty) {
			this.setState({ points, difficulty: Math.ceil(points / 10) });
			return this.initGame();
		}
		return this.setState({ points });
	}

	render() {
		return (
			<main className={this.props.className}>
				<div id="inch"></div>
				<Crab
					id="crab"
					className="crab hidden"
					width={this.state.inch}
					screenWidth={this.state.screenWidth}
					display={true} />
				{this.state.rotate ? <PleaseRotate /> : null}
				{!this.state.fullscreen && !this.state.rotate
					? <StartGame
						startGame={this.startGame}
						screenWidth={this.state.screenWidth}
						width={this.state.inch}
						/>
					: null}
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
								hidingSpots={this.state.hidingSpots}
								crabDimensions={this.state.crabDimensions}
								width={this.state.inch}
								difficulty={this.state.difficulty}
								inch={this.state.inch}
								screenWidth={this.state.screenWidth} />
							<div class="state">
								<h2>Crab State</h2>
								<div className="details">
									<p>Game Difficulty: {this.state.difficulty}</p>
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
