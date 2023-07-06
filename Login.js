import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Cookie from 'js-cookie';
class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : '',
            password : '',
            message : '',
        };
    }
    login = (e) => {
        var self = this;
        var apiurl = 'https://www.theeasylearnacademy.com/shop/ws/login.php';
        console.log('from submitted successfully');
        console.log(this.state);
        var formdata = new FormData();
        formdata.append("email",this.state.email);
        formdata.append("password",this.state.password);
        axios({
            url : apiurl,
            method : 'post',
            data : formdata,
            responseType : 'json',
            headers : {
                'Content-Type':'multipart/form-data'
            }
        }).then(function(response){
            console.log(response.data);
            if(response.data[0]['error']!=='no')
            {
                alert(response.data[0]['error']);
            }
            else if(response.data[1]['success'] == 'no')
            {
                self.setState({
                    message:response.data[2]['message']
                });
            }
            else
            {
                //login successful
                alert('login successfull');
                //create cookie
                Cookie.set('isLoggedIn',true);
                Cookie.set('id',response.data[3]['id']);
                //create cookie
                //redirect on login route
                window.location = '/';
            }
        });
        e.preventDefault();
    }
    updateValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (<div>
            <Header />
            <main>
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="login_part ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-lg-6 col-md-6">
                                <div className="card shadow">
                                    <div className="login_part_form">
                                        <div className="login_part_form_iner">
                                            <h3>Welcome Back ! <br />
                                                Please Sign in now</h3>
                                            <form onSubmit={this.login} className="row contact_form" action="#" method="post" noValidate="novalidate">
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.updateValue} />
                                                </div>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.updateValue} />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <button type="submit" value="submit" className="btn_3">
                                                        log in
                                                    </button>
                                                    <Link className="lost_pass" to="/Register">Sign UP</Link> &nbsp;
                                                    <Link className="lost_pass" to="/Forgot_password">forget password?</Link>
                                                </div>
                                                <div>{this.state.message}</div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>)
    }
}
export default Login