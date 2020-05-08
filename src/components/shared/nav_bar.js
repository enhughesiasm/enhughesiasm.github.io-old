import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMobileMenu: false,
		};

		this.toggleBurger = this.toggleBurger.bind(this);
		this.onNavLinkClicked = this.onNavLinkClicked.bind(this);
	}

	toggleBurger() {
		let active = !this.state.showMobileMenu;
		this.setState({ showMobileMenu: active });
	}

	onNavLinkClicked() {
		this.setState({ showMobileMenu: false });
		document.activeElement.blur();
	}

	render() {
		return (
			<div>
				<nav
					className='navbar is-primary is-bold is-fixed-top'
					role='navigation'
					aria-label='main navigation'>
					<div className='navbar-brand'>
						<a
							href='/'
							className='navbar-item'
							activeclassname='active'>
							<div onClick={this.onNavLinkClicked}>
								<h1 className='is-size-1 has-text-weight-bold'>
									e
								</h1>
							</div>
						</a>
						<a
							role='button'
							className={
								'navbar-burger ' +
								(this.state.showMobileMenu ? 'is-active' : '')
							}
							onClick={this.toggleBurger}
							aria-label='menu'
							aria-expanded='false'>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</a>
					</div>
					<div
						className={
							'navbar-menu ' +
							(this.state.showMobileMenu ? 'is-active' : '')
						}>
						<div className='navbar-start'>
							<NavLink
								exact
								to='/'
								className='navbar-item'
								activeClassName='active'>
								<div onClick={this.onNavLinkClicked}>home</div>
							</NavLink>

							<div className='navbar-item has-dropdown is-hoverable'>
								<NavLink
									to='/anxiety'
									className='navbar-link'
									activeClassName='active'>
									<div onClick={this.onNavLinkClicked}>
										anxiety
									</div>
								</NavLink>
								<div className='navbar-dropdown'>
									<a
										className='navbar-item'
										href='http://www.walkingoncustard.com'>
										articles
									</a>
									<NavLink
										to='/woc'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											book
										</div>
									</NavLink>
									<NavLink
										to='/speaking'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											talks
										</div>
									</NavLink>
									<NavLink
										to='/support'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											support Neil&apos;s work
										</div>
									</NavLink>
								</div>
							</div>
							<div className='navbar-item has-dropdown is-hoverable'>
								<NavLink
									to='/books'
									className='navbar-link'
									activeClassName='active'>
									<div onClick={this.onNavLinkClicked}>
										books
									</div>
								</NavLink>
								<div className='navbar-dropdown'>
									<NavLink
										to='/walking-on-custard'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											Walking on Custard & the Meaning of
											Life
										</div>
									</NavLink>
									<NavLink
										to='/shop-before-life'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											The Shop Before Life
										</div>
									</NavLink>
								</div>
							</div>
							<div className='navbar-item has-dropdown is-hoverable'>
								<NavLink
									to='/speaking'
									className='navbar-link'
									activeClassName='active'>
									<div onClick={this.onNavLinkClicked}>
										speaking
									</div>
								</NavLink>
								<div className='navbar-dropdown'>
									<NavLink
										to='/speaking'
										activeClassName='active-drop'
										className='navbar-item'>
										<div onClick={this.onNavLinkClicked}>
											on mental health
										</div>
									</NavLink>
									<NavLink
										to='/humour-consultant'
										className='navbar-item'
										activeClassName='active-drop'>
										<div onClick={this.onNavLinkClicked}>
											humour consultant
										</div>
									</NavLink>
								</div>
							</div>
							<div className='navbar-item has-dropdown is-hoverable'>
								<NavLink
									to='/interactive'
									className='navbar-link'
									activeClassName='active'>
									<div onClick={this.onNavLinkClicked}>
										games
									</div>
								</NavLink>
								<div className='navbar-dropdown'>
									<a
										href='https://enhughesiasm.com/complex'
										className='navbar-item'
										activeClassName='active-drop'>
										The Supplier&apos;s Complex
									</a>
									{/* <a
										className='navbar-item'
										href='https://q.enhughesiasm.com'>
										&quot;q&quot; - the live experience
									</a> */}
								</div>
							</div>
							<NavLink
								to='/occasional-email-experience'
								className='navbar-item'
								activeClassName='active'>
								<div onClick={this.onNavLinkClicked}>
									occasional email experience
								</div>
							</NavLink>
						</div>

						<div className='navbar-end'>
							<NavLink
								to='/contact'
								className='navbar-item'
								activeClassName='active'>
								<div onClick={this.onNavLinkClicked}>
									contact
								</div>
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
