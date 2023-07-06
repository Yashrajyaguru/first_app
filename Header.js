import { Link } from "react-router-dom";
import Cookies from "js-cookie";
function Header()
{
  let isLoggedIn = Cookies.get('isLoggedIn');
  let temp = null;
  if(isLoggedIn === undefined)
  {
    temp = (<><li><Link to="/register">Register</Link></li><li><Link to="/login">Login</Link></li></>)
  }
  else
  {
    temp = (<><li><Link to="/change-password">Change Password</Link></li><li><Link to="/logout">Logout</Link></li> <li><Link to="/Cart">Cart</Link></li><li><Link to="/Checkout">Checkout</Link></li></>)
  }
    return(<div>
        <header>
          <div className="header-area">
            <div className="main-header header-sticky">
              <div className="container-fluid">
                <div className="menu-wrapper">
                  <div className="logo">
                    <Link to="/"><img src="timezone/assets/img/logo/logo.png" alt /></Link>
                  </div>
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/product-category'>shop</Link></li>
                            {temp}
                          </ul>
                      </nav>
                  </div>
                 </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>)
}
export default Header;