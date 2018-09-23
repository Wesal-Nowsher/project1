import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import './jquery.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <SECTION classname="Dots">
                    <div id="fatherload" >
                        <div id="load">
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                    </div>
                </SECTION>
                {/*menu */}
                <div className="arrowDown"></div>
                <section className="menu">
                <div className="menu-container">
                    <div id="logo" data-menuanchor="HOME">
                        {/*<a href="#HOME">*/}
                        <img src="images/logo.png"/>
                        {/*</a>*/}
                        <div className="mobile-menu-btn" onclick="myFunction(this)">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <ul id="menu">
                            <li data-menuanchor="HOME">
                                {/*<a href="#HOME">HOME</a>*/}
                                HOME
                            </li>
                            <li data-menuanchor="ABOUT">
                                {/*<a href="#ABOUT">ABOUT</a>*/}
                                ABOUT
                            </li>
                            <li data-menuanchor="IDEAS">
                                IDEAS
                                {/*<a href="#IDEAS">IDEAS</a>*/}
                            </li>
                            <li data-menuanchor="CONTRIBUTE">
                                {/*<a href="#CONTRIBUTE">CONTRIBUTE</a>*/}
                                CONTRIBUTE
                            </li>
                            <li data-menuanchor="CONTACT">
                                CONTACT
                                {/*<a href="#CONTACT">CONTACT</a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
                </section>
                {/*home*/}
                <div id="fullpage">

                    <div className="section active" id="section0">
                        <section className="hero">
                            <div className="inner-text">
                                <p className="p2">DEVELOPER</p>
                            </div>
                        </section>
                        <div className="greeting"></div>
                        <div className="welcome-to">Welcome to Tennish.io</div>
                    </div>


                    {/*about*/}
                    <section className="About">
                    <div className="section" id="section1">
                        <canvas className="canvas-webgl" id="canvas-webgl"></canvas>
                        <div className="p-summary">

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                    </div>
                    </section>

                    {/*ideas */}
                    <section className="Ideas">
                    <div className="section" id="section2">

                        <div className="slide active"><h1>Idea 1</h1></div>
                        <div className="slide "><h1>Idea 2</h1></div>
                        <div className="slide"><h1>Idea 3</h1></div>
                        <div className="slide"><h1>Ideas 4</h1></div>
                    </div>
                    </section>
                    {/*contribute */}
                    <section className="contribute">
                    <div className="section" id="section3"><h1>Contribute</h1></div>
                    </section>

                    {/*contact */}
                    <div className="section" id="section4">
                        <div className="body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h2>Contact</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1">
                                        <form id="contact-form" className="form" action="#" method="POST" role="form">
                                            <div className="form-group">
                                                <label className="form-label" for="name">Your Name</label>
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabindex="1" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="email">Your Email</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="subject">Subject</label>
                                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="message">Message</label>
                                                <textarea rows="5" cols="50" name="message" className="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-start-order">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default App;
