import { Component } from 'preact';
import Clock from './Clock';

export default class App extends Component {
	state = { value: '', name: 'world' }

	onInput = ev => {
		this.setState({
			value: ev.target.value
		});
	}

	onSubmit = e => {
		e.preventDefault();
		this.setState( { name: this.state.value });
	}
	render() {
		return (
			<div>
				<h1>Hello, {this.state.name}</h1>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.value} onInput={this.onInput} />
					<button type="submit">Update</button>
				</form>
				<Clock />
			</div>
		);
	}
}
