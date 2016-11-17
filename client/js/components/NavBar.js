import React from 'react'

class NavBar extends React.Component {

    constructor() {
        super();

    }

    render() {

        return (
          <header>
              <div class="nav">
                  <div class="navBarLogo">
                    <img src="imgs/salesforce-header-logo.png" />
                  </div>
                  <ul class="navBar">
                      <li><a href="#">PRODUCTS</a>
                          <ul>
                              <li><a href="#">App Cloud</a></li>
                              <li><a href="#">- Force.com</a></li>
                              <li><a href="#">- Heroku</a></li>
                              <li><a href="#">- Lightning</a></li>
                              <li><a href="#">- Mobile</a></li>
                              <li><a href="#">- Trailhead</a></li>
                              <li><a href="#">- Salesforce DX</a></li>
                              <li><a href="#">- AppExchange</a></li>
                          </ul>
                      </li>
                      <li><a href="#">RESOURCES</a>
                          <ul>
                              <li><a href="#">RESOURCES</a></li>
                              <li><a href="#">COMMUNITY</a></li>
                              <li><a href="#">BLOG</a></li>
                          </ul>
                      </li>
                      <li><a href="#">COMMUNITY</a>
                          <ul>
                              <li><a href="#">RESOURCES</a></li>
                              <li><a href="#">COMMUNITY</a></li>
                              <li><a href="#">BLOG</a></li>
                          </ul>
                      </li>
                      <li><a href="#">BLOG</a>
                          <ul>
                              <li><a href="#">RESOURCES</a></li>
                              <li><a href="#">COMMUNITY</a></li>
                              <li><a href="#">BLOG</a></li>
                          </ul>
                      </li>
                      <li><a href="#">TRAILHEAD</a>
                          <ul>
                              <li><a href="#">RESOURCES</a></li>
                              <li><a href="#">COMMUNITY</a></li>
                              <li><a href="#">BLOG</a></li>
                          </ul>
                      </li>
                      <li><input type="search" name="search" placeholder="Search" /></li>
                      <li>
                        <button id="login-btn" class="button-login" type="button">Login ›</button>
                      </li>
                      <li>
                        <button id="signup-btn" class="button-signup" type="button">Signup ›</button>
                      </li>
                  </ul>
              </div>
          </header>
        );
  }
}

export default NavBar
