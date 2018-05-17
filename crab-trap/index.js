import './style';
import { Component } from 'preact';

import Crab from './components/crab';

export default class App extends Component {
	render() {
		return (
			<div>
				<Crab walk eat direction='right' />
			</div>
		);
	}
}
