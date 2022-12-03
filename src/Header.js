import React from "react";
import './Header.css';
import { MdSearch } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getAuth } from "firebase/auth";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const handleAuthentication = () => {
    const auth = getAuth();
    const user = auth.currentUser;
      if (user) {
          auth.signOut();
        } else {
          // No user is signed in.
        }
    } 
    return(
        <div className="header">
             <Link to="/" > 
            <img className="header_logo" src="https://static.vecteezy.com/system/resources/thumbnails/004/979/844/small/simple-cactus-logo-that-is-easy-to-recognize-and-remember-free-vector.jpg" alt="" />
             </Link> 
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <MdSearch className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                     <span className="header_optionLineOwn" >{!user ? "게스트" : user.email}</span> 
                     <Link to={!user && "/Login" } className="homelogin"> 
                     <span onClick={handleAuthentication} className="header_optionLineTwo" >{user? '로그아웃' : '로그인' }</span> 
                     </Link> 
                </div>
                <div className="header_option">
                    <span className="header_optionLineOwn">돌아가기</span>
                    <Link to='/orders' className="orderlist"> 
                        <span className="haeder_optionLineTwo">주문내역</span>
                    </Link> 
                </div>
                <div className="header_option">
                    <span className="header_optionLineOwn">반가워요</span>
                    <span className="header_optionLineTwo">ABOUT</span>
                </div>
                <Link to="/Checkout"> 
                <div className="header_optionBasket">
                <MdOutlineLocalGroceryStore />
               <span className="header_optionLineTwoheader_basketCount">
                     {basket?.length} 
               </span>
               </div>
                </Link> 
            </div>
        </div>
    )
}

export default Header;