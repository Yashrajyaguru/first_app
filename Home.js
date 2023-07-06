import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
class Home extends Component 
{
  render() {
    return (<div>
        <Header />
        <main>
          <div className="slider-area ">
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center slide-bg">
                <div className="container">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                        <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                          <Link to="industries.html" className="btn hero-btn">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                      <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                        <img src="timezone/assets/img/hero/watch.png" alt className=" heartbeat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="new-product-area section-padding30">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section-tittle mb-70">
                    <h2>New Arrivals</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-new-pro mb-30 text-center">
                    <div className="product-img">
                      <img src="timezone/assets/img/gallery/new_product1.png" alt />
                    </div>
                    <div className="product-caption">
                      <h3><Link to="product_details.html">Thermo Ball Etip Gloves</Link></h3>
                      <span>$ 45,743</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="gallery-area">
            <div className="container-fluid p-0 fix">
              <div className="row">
                <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div className="gallery-img big-img" style={{ "background-image": "url(timezone/assets/img/gallery/gallery1.png)" }} />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div className="gallery-img big-img" style={{ "background-image": "url(timezone/assets/img/gallery/gallery2.png)" }} />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-12">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                      <div className="single-gallery mb-30">
                        <div className="gallery-img small-img" style={{ "background-image": "url(timezone/assets/img/gallery/gallery3.png)" }}>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                      <div className="single-gallery mb-30">
                        <div className="gallery-img small-img" style={{ "background-image": "url(timezone/assets/img/gallery/gallery4.png)" }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popular-items section-padding30">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="section-tittle mb-70 text-center">
                    <h2>Popular Items</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-popular-items mb-50 text-center">
                    <div className="popular-img">
                      <img src="timezone/assets/img/gallery/popular1.png" alt />
                      <div className="img-cap">
                        <span>Add to cart</span>
                      </div>
                      <div className="favorit-items">
                        <span className="flaticon-heart" />
                      </div>
                    </div>
                    <div className="popular-caption">
                      <h3><Link to="product_details.html">Thermo Ball Etip Gloves</Link></h3>
                      <span>$ 45,743</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      </div>

    );
  }
}
export default Home