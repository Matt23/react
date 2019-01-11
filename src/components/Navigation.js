import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
          <nav className="navbar navbar-dark bg-dark">
            <a href="google.com" className="text-white">
             { this.props.title }
            </a>
          </nav>			
		)
	}
}

export default Navigation;