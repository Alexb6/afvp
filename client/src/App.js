import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import FrontArticles from './components/componentsWP/FrontArticles';
import FrontActualites from './components/componentsWP/FrontActualites';
import FrontEvenements from './components/componentsWP/FrontEvenements';

import MemberNavbar from './components/componentsMembers/MemberNav'
import MemberWelcome from './components/componentsMembers/MemberWelcome'
import MemberLogin from './components/componentsMembers/MemberLogin'
import MemberProfile from './components/componentsMembers/MemberProfile'
import MemberToValidate from './components/componentsMembers/MemberToValidate'
import MembersToValidate from './components/componentsMembers/MembersToValidate'

class App extends Component {

	render() {

		return (
			<Router>
				<div className="App">
					<MemberNavbar />
					<Route exact path="/" component={MemberWelcome} />
					<div className="container">
						<Route exact path="/tovalidate" component={MemberToValidate} />
						<Route exact path="/login" component={MemberLogin} />
						<Route exact path="/profile" component={MemberProfile} />
						<Route exact path="/memberstovalidate" component={MembersToValidate} />
					</div>
					<div className="container">
						<FrontArticles></FrontArticles>
						<FrontActualites></FrontActualites>
						<FrontEvenements></FrontEvenements>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
