import React from 'react';
class HeaderSite extends React.Component {
	render (){
	return(
		<header className='header'>{this.props.title}</header>
	)}
}

export default HeaderSite