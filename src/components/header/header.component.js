import React, { Component } from 'react';
import logo from '../../assets/images/bt_logotype.png';
import './header.component.css';

class HeaderComponent extends Component {
	render() {
		return (
			<header className="header">
				<div className="container mobile-view">
					<div className="row">
						<div className="col-3 menu">
              <button class="btn btn-link">
                <i className="fas fa-bars fa-2x" />
              </button>
						</div>
						<div className="col-6 logo d-flex align-items-center justify-content-center">
							<img src={logo} alt="Logo" />
						</div>
						<div className="col-3 email">
              <button class="btn btn-link">
                <i className="far fa-envelope fa-2x" />
              </button>
						</div>
					</div>
				</div>

				<div className="container desktop-view">
          <div className="row">
            <div className="col-12 col-md-3 logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-12 col-md-9 nav-links">
              <ul>
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
            </div>
          </div>
        </div>
			</header>
		);
	}
}

export default HeaderComponent;
