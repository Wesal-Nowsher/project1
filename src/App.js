import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import './jquery.css';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactSlider from 'react-slider';
import { Slide } from 'react-slideshow-image';


class App extends Component {
    state = {
    visible:true,
        section1:true,
        section2:false,
        section3:false,
        section4:false,
        section5:false,
        next:"1",
        properties: {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true
        }
}




    componentWillMount() {
        setTimeout(
            function() {
                this.setState({visible:false});
            }
                .bind(this),
            1500
        );

    }
    nextShow=()=>{
            console.log("clicked");
            switch (this.state.next){
                case "1":
                    this.setState({next:"2" });
                    console.log(this.state.section2);
                    break;
                case "2":
                    this.setState({next:"3"});
                    break;
                case "3":
                    this.setState({next:"4"});
                    break;
                case "4":
                    this.setState({next:"5"});
                    break;
                case "5":
                    this.setState({next:"1"});
                    break;
            }
    }
    activeMenu=(next)=>{
        console.log("clicked");
        switch (next){
            case "1":
                this.setState({next:"1"});
                break;
            case "2":
                this.setState({next:"2"});
                break;
            case "3":
                this.setState({next:"3"});
                break;
            case "4":
                this.setState({next:"4"});
                break;
            case "5":
                this.setState({next:"5"});
                break;
        }

    };




   render() {
        return (
            <div className="App">
                <section className={this.state.visible?'fadeIn':'fadeOut'}>
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
                </section>
                {/*menu */}
                <div className="arrowDown " onClick={this.nextShow.bind()} ></div>
                <section className="menu ">
                <div className="menu-container">
                    <div id="logo" data-menuanchor="HOME">
                        {/*<a href="#HOME">*/}
                        <img src={require("./images/logo.png")}/>
                        {/*</a>*/}
                        <div className="mobile-menu-btn"
                             onclick="myFunction(this)"
                        >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <ul id="menu">
                            <li data-menuanchor="HOME" className={this.state.next== "1" ?"active":null} onClick={()=>{this.activeMenu("1")}}>
                                {/*<a href="#HOME">HOME</a>*/}
                                HOME
                            </li>
                            <li data-menuanchor="ABOUT" className={this.state.next== "2" ?"active":null} onClick={()=>{this.activeMenu("2")}}>
                                {/*<a href="#ABOUT">ABOUT</a>*/}
                                ABOUT
                            </li>
                            <li data-menuanchor="IDEAS" className={this.state.next== "3" ?"active":null} onClick={()=>{this.activeMenu("3")}}>
                                IDEAS
                                {/*<a href="#IDEAS">IDEAS</a>*/}
                            </li>
                            <li data-menuanchor="CONTRIBUTE" className={this.state.next== "4" ?"active":null} onClick={()=>{this.activeMenu("4")}}>
                                {/*<a href="#CONTRIBUTE">CONTRIBUTE</a>*/}
                                CONTRIBUTE
                            </li>
                            <li data-menuanchor="CONTACT" className={this.state.next== "5" ?"active":null} onClick={()=>{this.activeMenu("5")}}>
                                CONTACT
                                {/*<a href="#CONTACT">CONTACT</a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
                </section>
                {/*fullpage*/}
                <div id="fullpage">
                    <section className={this.state.next == "1" ? 'home section-1 display':'home section-1 dis-none'}>
                    <div className="section active" id="section0">
                        <section className="hero">
                            <div className="inner-text">
                                <p className="p2">

                                    <Typed
                                        strings= {["LOVE TENNIS?", "0 = TENNIS?", "L0VE TENNIS?"]}
                                    typeSpeed= {50}
                                    backSpeed={10}
                                    backDelay={2000}
                                    showCursor= {false}
                                    loop>
                                    </Typed></p>
                            </div>
                        </section>
                        <div className="greeting">Good afternoon,</div>
                        <div className="welcome-to">Welcome to Tennish.io</div>
                    </div>
                    </section>

                    {/*about*/}
                    <section className={this.state.next == "2" ? 'About section-2 display':'About section-2 dis-none'}>
                    <div className="section" id="section1">
                        <canvas className="canvas-webgl" id="canvas-webgl"></canvas>
                        <div className="p-summary">

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                    </div>
                    </section>

                    {/*ideas */}
                    <section className={this.state.next == "3" ? 'Ideas section-3 display':'Ideas section-3 dis-none'}>
                    <div className="section" id="section2">
                        <Slide {...this.state.properties}>
                        <div className=""><h1>Idea 1</h1></div>
                        <div className=""><h1>Idea 2</h1></div>
                        <div className=""><h1>Idea 3</h1></div>
                        <div className=""><h1>Idea 4</h1></div>
                        </Slide>
                    </div>
                    </section>
                    {/*contribute */}
                    <section className={this.state.next == "4" ? 'contribute section-4 display':'contribute section-4 dis-none'}>
                    <div className="section" id="section3"><h1>Contribute</h1></div>
                    </section>

                    {/*contact */}
                    <section className={this.state.next == "5" ? 'section-5 display':'section-5 dis-none'}>
                    <div className="section" id="section4">
                        <div className="body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h2>Contact</h2>
                                    </div>
                                </div>
                                <div className="row make-cen">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1">
                                        <form id="contact-form" className="form" action="#" method="POST" role="form">
                                            <div className="form-group">
                                                <label className="form-label" for="name"></label>
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabindex="1" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="email"></label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="subject"></label>
                                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3"/>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" for="message"></label>
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
                    </section>
                </div>



            </div>
        );
    }
}

export default App;
