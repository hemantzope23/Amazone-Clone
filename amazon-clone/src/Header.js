import React from 'react';
import './Header.css';

 function Header() {
    return (
        <div className='header'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                {/* Logo */}
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="headre_optionLineOn">
                        Hello Guest 
                    </span>
                    <span className="headre_optionLineTwo">
                        Sing In
                    </span>
                </div>

                <div className="header_option">
                    <span className="headre_optionLineOn">
                        Returns 
                    </span>
                    <span className="headre_optionLineTwo">
                        Orders
                    </span> 
                </div>

                <div className="header_option">
                    <span className="headre_optionLineOn">
                        Your 
                    </span>
                    <span className="headre_optionLineTwo">
                        Prime
                    </span>
                </div>

            </div>
        </div>
    )
}
export default Header;