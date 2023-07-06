import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import Cookies from 'js-cookie';
class Cart extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            items : [],
            total: 0
        }
        var self = this;
    }
    componentDidMount()
    {
        // 1) [{"error":"input is missing"}]
        // 2) [{"error":"no"},{"total":0}]
        // 3) [{"error":"no"},{"total":2},{"id":"2","title":"dell laptop","price":"200","quantity":"2","weight":"3500","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk"},{"id":"1","title":"Acer Laptop","price":"100","quantity":"2","weight":"3000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk"}]
        // input : usersid(required) 
        var userid = Cookies.get('id');
        var self = this;
        var apiurl = `https://www.theeasylearnacademy.com/shop/ws/cart.php?usersid=${userid}`;
        axios({
            url:apiurl,
            responseType:'json',
            method:'get'
        }).then(function(response){
            console.log(response.data);
            var error = response.data[0]['error'];
            if(error !='no')
                alert(error);
            else 
            {
                var total = response.data[1]['total'];
                if(total == 0)
                    alert('cart is empty');
                else 
                {
                    response.data.splice(0,2);
                    self.setState({
                        items:response.data
                    },()=>{
                        var temp = 0;
                        self.state.items.map(function(item){
                            temp = temp + (item['price'] * item['quantity']);
                        });
                        self.setState({
                            total:temp
                        })
                    });
                }
            }
        });
    }
    DeleteFromCart = (item) => {
        console.log('test');
        console.log(item);
        var self = this;
        var cartid = item['cartid'];
        var apiurl = `https://www.theeasylearnacademy.com/shop/ws/delete_from_cart.php?cartid=${cartid}`;
        console.log(apiurl);
        axios({
            url: apiurl,
            method: 'get',
            responseType: 'json',
        }).then(function(response){
            console.log(response.data);
            var error = response.data[0]['error'];
            if(error != 'no')
                alert(error);
            else 
            {
                alert(response.data[1]['message']);
                var temp = self.state.items.filter((CurrentItem)=>{
                    if(item != CurrentItem)
                        return CurrentItem
                });
                self.setState({
                    items:temp
                },() =>{
                    var temp_total = 0;
                    self.state.items.map(function(item){
                        temp_total = temp_total + (item['price'] * item['quantity']);
                    });
                    self.setState({
                        total:temp_total
                    })
                });

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
                                        <h2>Cart List</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="cart_area section_padding">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.items.map(item => {
                            
                                            return ( <tr>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
        <img src={"https://www.theeasylearnacademy.com/shop/images/product/" + item['photo']} alt />
                                                        </div>
                                                        <div className="media-body">
                                                            <p>{item['title']}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{item['price']}</h5>
                                                </td>
                                                <td>
                                                {item['quantity']}
                                                </td>
                                                <td>
                                                    <h5>{item['price'] * item['quantity']}</h5>
                                                </td>
                                                <td>
                                                    <button type='button' className='btn btn-danger' onClick={() => this.DeleteFromCart(item)}>Remove</button>
                                                </td>
                                            </tr>);
                                        })}
                                        <tr>
                                            <td />
                                            <td />
                                            <td />
                                            
                                            <td>
                                                <h5>{this.state.total}</h5>
                                            </td>
                                            <td/>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="checkout_btn_inner float-right">
                                    <Link className="btn_1" to="/">Continue Shopping</Link>
                                    <Link className="btn_1 checkout_btn_1" to="/checkout">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>

            <Footer />
        </div>)
    }
}
export default Cart