import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Cookies from 'js-cookie'
class ChangePassword extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    };
  }
  UpdateValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  submitForm = (e) =>  {
    e.preventDefault();
    console.log(this.state);
    if(this.isValidInput()==true)
    {
      this.UpdatePassword();
    }
  }
  isValidInput()
  {
    var isValid = true;
    //check password and new password are not same
    if(this.state.password == this.state.new_password)
    {
      alert('password and new password must not be same');
      isValid= false;
    }
    //further check new_password and confirm_new_password must be same
    else if(this.state.new_password != this.state.confirm_new_password)
    {
      alert('new password and confirm new password are not same');
      isValid  = false;
    }
    return isValid;
  }
  UpdatePassword()
  {
    var self = this;
    var form = new FormData();
    //input : id,password,newpassword(required)
    form.append("id",Cookies.get("id"));
    form.append("password",this.state.password);
    form.append("newpassword",this.state.new_password);

    axios({
      method:'post',
      url: 'https://www.theeasylearnacademy.com/shop/ws/change_password.php',
      headers:{
        'Content-Type' : 'multipart/form-data'
      },
      responseType:'json',
      data:form
    }).then((response) =>{
      console.log(response.data);
      /*
       [{"error":"input is missing"}]
       [{"error":"no"},{"success":"no"},{"message":"invaild change password attempt"}]
       [{"error":"no"},{"success":"yes"},{"message":"password changed"}]
       */
      var error = response.data[0]['error'];
      if(error!='no')
      {
        alert(error);
      }
      else
      {
        alert(response.data[2]['message']);
        if(response.data[1]['success']==='yes')
        {
          window.location = '/';
          Cookies.remove("isLoggedIn");
          Cookies.remove("id");
        }
      }
    });
  }
    render()
    {
        return(<div>
            <Header />
            <main>
  <div className="slider-area ">
    <div className="single-slider slider-height2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Change Password</h2>
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
                <h3>Change Your Password</h3>
                <form className="row contact_form" method="post" onSubmit={this.submitForm}>
                  <div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Current Password" onChange={this.UpdateValue} required/>
                  </div><div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="New Password" onChange={this.UpdateValue} required />
                  </div><div className="col-md-12 form-group p_star">
                    <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Confirm  New Password" onChange={this.UpdateValue} required />
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="btn_3">
                      Save Changes
                    </button>
                  </div>
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
export default ChangePassword