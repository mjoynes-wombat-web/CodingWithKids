import './style';
import { Component } from 'preact';

import './assets/styles/index.scss';

import Crab from './components/crab';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pincerAction: 'eating',
			walk: false,
			direction: 'right',
		}

		this.setPincerAction = this.setPincerAction.bind(this);
		this.walk = this.walk.bind(this);
		this.stopWalking = this.stopWalking.bind(this);
	}

	setPincerAction(e) {
		e.preventDefault();
		const { value } = e.target;
		this.setState({ pincerAction: value })
	}

	walk(e) {
		e.preventDefault();
		let direction;
		if (this.state.direction === 'right') direction = 'left';
		else direction = 'right';

		this.setState({ walk: true, direction });
	}

	stopWalking(e) {
		e.preventDefault();
		this.setState({ walk: false });
	}
	render() {
		return (
			<main>
				<Crab walk={this.state.walk} pincerAction={this.state.pincerAction} direction={this.state.direction} />
				<form>
					<button onClick={this.walk}>Walk {this.state.direction === 'right' ? 'Left' : 'Right'}</button>
					{this.state.walk ? (
						<button onClick={this.stopWalking}>Stop Walking</button>
					)
					: null }
					<h3>Pincer Actions</h3>
					<label HTMLFor="pincerEat">
						<input
							type="radio"
							id="pincerEat"
							name="pincerAction"
							value="eating"
							onChange={this.setPincerAction}
							checked={this.state.pincerAction === 'eating'} />
						Eating
					</label>
					<label HTMLFor="pincerWave">
						<input
							type="radio"
							id="pincerWave"
							name="pincerAction"
							value="waving"
							onChange={this.setPincerAction}
							checked={this.state.pincerAction === 'waving'} />
						Waving
					</label>
					<label HTMLFor="pincerSnap">
						<input
						type="radio"
						id="pincerSnap"
						name="pincerAction"
						value="snapping"
						onChange={this.setPincerAction}
						checked={this.state.pincerAction === 'snapping'} />
						Snapping
					</label>
				</form>
				<div>
					<h2>Crab State</h2>
					<p>Walking: {this.state.walk.toString()}</p>
					<p>Direction: {this.state.direction}</p>
					<p>Pincer Action: {this.state.pincerAction}</p>
				</div>
			</main>
		);
	}
}
