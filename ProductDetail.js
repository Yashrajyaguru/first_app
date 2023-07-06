import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Cookies from 'js-cookie'
class ProductDetail extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            detail : '',
            price : '',
            stock : '',
            weight : '',
            size : '',
            photo : '',
            productid : ''
        }
    }
    AddToCart = () =>{
        // alert('button clicked....');
        /*
             [{"error":"input is missing"}] 
             [{"error":"no"},{"message":"cart updated"}]
             input : usersid,productid(required) 
        */
       var usersid = Cookies.get('id');
       var apiurl = `https://theeasylearnacademy.com/shop/ws/add_to_cart.php?productid=${this.state.productid}&usersid=${usersid}`;
       var self = this;
       axios({
         url: apiurl, 
         method: 'get',
         responseType : 'json'
       }).then(function (response) {
            console.log(response.data);
            /*
                [{'error':'input missing'}]
                [{'error':'no'},{'message':'product added into cart'}]
            */
           var error = response.data[0]['error'];
           if(error !='no')
                alert(error);
            else 
                alert(response.data[1]['message']);
       });
       
    }
    componentDidMount()
    {
        var url = new URL(window.location.href);
        var CurrentPage = url.href;
        var position_of_last_slash = CurrentPage.lastIndexOf("/");
        this.setState({
            productid:CurrentPage.substr(position_of_last_slash+1)
        },() => {
            var self = this;
            var apiurl = `https://www.theeasylearnacademy.com/shop/ws/product.php?productid=${this.state.productid}`;
            axios({
                method: 'get',
                url: apiurl,
                responseType : 'json'
            }).then((response) => {
                console.log(response.data);
                if(response.data[0]['error'] !== 'no')
                {
                    alert(response.data[0]['error']);
                }
                else if(response.data[1]['total']==0)
                {
                    alert('no data found');
                }
                else 
                {
                    self.setState({
                       title : response.data[2].title,
                       detail : response.data[2].detail,
                       price : response.data[2].price,
                       photo : response.data[2].photo,
                       weight : response.data[2].weight,
                       stock : response.data[2].stock,
                       size : response.data[2].size,
                    });
                }
            });
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
                                        <h2>Detail</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_image_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                            <img src={"https://www.theeasylearnacademy.com/shop/images/product/"  + this.state.photo } alt="image not found" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="single_product_text">
                                    <h2>{this.state.title}</h2>
                                    <p>
                                        {this.state.detail}
                                    </p>
                                    <div className="card_area">
                                    
                                            <p>{this.state.stock} left</p> 
                                            <p>&#8377; {this.state.price}</p>
                                            <p>Size {this.state.size}</p>
                                            <p>weight {this.state.weight}</p>
                                        <div className="add_to_cart">
                                            <button type='button' className="btn_3" 
                                            onClick={this.AddToCart} >add to cart</button>
                                        </div>
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
export default ProductDetail