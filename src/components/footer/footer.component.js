import React, { Component } from 'react';
import './footer.component.css';

class FooterComponent extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<ul className="nav-links">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Features</a>
								</li>
								<li>
									<a href="#">Technologies</a>
								</li>
								<li>
									<a href="#">Creator</a>
								</li>
								<li>
									<a href="#">Coming Soon</a>
								</li>
							</ul>

							<ul className="social-links">
								<li>
									<a href="#">Twitter</a>
								</li>
								<li>
									<a href="#">Instagram</a>
								</li>
								<li>
									<a href="#">Facebook</a>
								</li>
							</ul>

							<ul className="copyrights">
								<li>
                  <a href="#">&copy; 2018 Body Therapy</a>
                </li>
								<li>
                  <a href="#">Privacy Policy</a>
                </li>
								<li>
                  <a href="#">Terms of Service</a>
                </li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterComponent;
