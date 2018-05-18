import './style';
import { Component } from 'preact';

import Crab from './components/crab';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pincerAction: 'eating',
			walk: false,
			direction: 'right',
		}

		this.movePincers = this.movePincers.bind(this);
		this.walk = this.walk.bind(this);
		this.stopWalking = this.stopWalking.bind(this);
	}

	movePincers() {
		if (this.state.pincerAction === 'eating') return this.setState({ pincerAction: 'waving' });
		if(this.state.pincerAction === 'waving') return this.setState({ pincerAction: 'snapping' });

		return this.setState({ pincerAction: 'eating' })
	}

	walk() {
		let direction;
		if (this.state.direction === 'right') direction = 'left';
		else direction = 'right';

		this.setState({ walk: true, direction });
	}

	stopWalking() {
		this.setState({ walk: false });
	}
	render() {
		return (
			<div>
				<Crab walk={this.state.walk} pincerAction={this.state.pincerAction} direction={this.state.direction} />
				<button onClick={this.movePincers}>Change Pincer Movement</button>
				<button onClick={this.walk}>Walk {this.state.direction === 'right' ? 'Left' : 'Right'}</button>
				{this.state.walk ? (
					<button onClick={this.stopWalking}>Stop Walking</button>
				)
				: null }
				<div>
					<h2>Crab State</h2>
					<p>Walking: {this.state.walk.toString()}</p>
					<p>Direction: {this.state.direction}</p>
					<p>Pincer Action: {this.state.pincerAction}</p>
				</div>
			</div>
		);
	}
}
