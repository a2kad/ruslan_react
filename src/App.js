import React from 'react';
import HeaderSite from './components/HeaderSite';
import Image from './components/Image';
import logo from './img/logo.png'

class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			Hello: "-= Hello, World! =-",
			userData: ""
		}
		this.inputClick = this.inputClick.bind(this)
	}

render(){
	return(<div className='name'>
	<HeaderSite />
	<h1>{this.state.Hello}</h1>
	<h2>{this.state.userData}</h2>
	<input placeholder='Enter the text' 
	onChange={event => this.setState({userData: event.target.value})}
	onClick={this.inputClick} 
	onMouseOver={this.mouseOver}></input>
	<Image image={logo} />
</div>
)
}
inputClick () {
	this.setState({Hello: "Clicked"})
	console.log("Clicked")
}
mouseOver () {console.log("Mouse Over")}
}

export default App