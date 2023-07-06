import Cookies from "js-cookie";
import Cookie from "js-cookie";
import React, {Component,} from 'react'
class Logout extends Component
{
    constructor(props)
    {
        super(props);
        Cookies.remove('isLoggedIn');
        Cookies.remove('id');
        window.location = '/';
    }
}
export default Logout