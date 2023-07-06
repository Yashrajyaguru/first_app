import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
class Category extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      categories : []
    }
  }
  componentDidMount() {
    var self = this;
    axios({
      method: 'get',
      url: 'https://www.theeasylearnacademy.com/shop/ws/category.php',
      responseType: 'json',

    }).then(function (response) {
        //console.log(response.data);
        var error = response.data[0]['error'];
        if(error !=='no')
        {
            alert(error);
        }
        else 
        {
            var total = response.data[1]['total'];
            if(total == 0)
              alert('no category found');
            else 
            {
              response.data.splice(0,2);
               self.setState({
                  categories : response.data
               });
            }
        }
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
                    <h2>Product Category</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="popular-items">
          <div className="container">
            <div className="row product-btn justify-content-between mb-40">
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row">
                  {this.state.categories.map(function(category){
                    return (<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-popular-items mb-50 text-center">
                      <div className="popular-img">
                        <img src="theme/assets/img/gallery/popular1.png" alt />
                        <div className="favorit-items">
                          <span className="flaticon-heart" />
                        </div>
                      </div>
                      <div className="popular-caption">
                        <h3><Link to={"/product-list/" + category.id}>{category.title}</Link></h3>
                      </div>
                    </div>
                  </div>);
                  })}
                  
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <div className="shop-method-area">
          <div className="container">
            <div className="method-wrapper">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-package" />
                    <h6>Free Shipping Method</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-unlock" />
                    <h6>Secure Payment System</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-reload" />
                    <h6>Secure Payment System</h6>
                    <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>)
  }
}
export default Category