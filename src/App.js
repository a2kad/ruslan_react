import React from 'react';
import HeaderSite from './components/HeaderSite';
import Users from './components/Users';
class App extends React.Component {

	render(){
		return(<div>
			<HeaderSite title="List of users"/>
			<main>
				<Users />
			</main>
			<aside></aside>
		</div>)
	}
}

export default App