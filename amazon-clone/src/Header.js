import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcone from"@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

 function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
        
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon  className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="headre_optionLineOne">
                        Hello Guest 
                    </span>
                    <span className="headre_optionLineTwo">{user ? 'Sing Out' : 'Sing In'}</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="headre_optionLineOne">
                        Returns 
                    </span>
                    <span className="headre_optionLineTwo">
                       & Orders
                    </span> 
                </div>

                <div className="header_option">
                    <span className="headre_optionLineOne">
                        Your 
                    </span>
                    <span className="headre_optionLineTwo">
                        Prime
                    </span>
                </div>
               
                <Link to="/checkout">
                    <div className="headre_optionBasket">
                        <ShoppingBasketIcone />
                        <span className="header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;