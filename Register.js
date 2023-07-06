import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {message : ''}
    }
    onChangeData = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    register = (e) => {
        if(this.state.password != this.state.password2){
            alert("password and confirm password are not same");
        }
        else{
            var apiurl = "https://theeasylearnacademy.com/shop/ws/register.php";
            var formData = new FormData();

            formData.append("email",this.state.email);
            formData.append("mobile",this.state.mobile);
            formData.append("password",this.state.password);
            var self = this;
            axios({
                method : 'post',
                url : apiurl,
                data : formData,
                responseType : 'json',
                headers : {
                    'Content-Type':'multipart/form-data'
                }
            }).then(function (response){
                console.log(response.data);
                var error = response.data[0]['error'];
                if(error !== 'no')
                  alert(error)
                else if(response.data[1]['success'] === 'no')
                  self.setState({message:response.data[2]['message']})
                else
                {
                    alert('register successfull');
                    //redirect on login route
                    window.location = '/login';
                }
            });
        }
        e.preventDefault();
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
                                        <h2>Register</h2>
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
                                            <h3>Create your account</h3>
                                            <form className="row contact_form" action="#" method="post" onSubmit={this.register}>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="text" onChange={this.onChangeData} className="form-control" id="email" name="email" placeholder="Email" />
                                                </div>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="number" onChange={this.onChangeData} className="form-control" id="mobile" name="mobile" placeholder="10 digit mobile" />
                                                </div>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="password" onChange={this.onChangeData} className="form-control" id="password" name="password" placeholder="Password" />
                                                </div>
                                                <div className="col-md-12 form-group p_star">
                                                    <input type="password" onChange={this.onChangeData} className="form-control" id="password" name="password2" placeholder="Confirm Password" />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <button type="submit" value="submit" className="btn_3">
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                            <div className='text-danger'>{this.state.message}</div>
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
export default Register