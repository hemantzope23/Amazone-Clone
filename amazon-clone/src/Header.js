import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcone from"@material-ui/icons/ShoppingBasket";

 function Header() {
    return (
        <div className='header'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon  className="header_searchIcon"/>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="headre_optionLineOne">
                        Hello Guest 
                    </span>
                    <span className="headre_optionLineTwo">
                        Sing In
                    </span>
                </div>

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
                <div className="headre_optionBasket">
                    <ShoppingBasketIcone />
                    <span className="header_basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>
    )
}
export default Header;