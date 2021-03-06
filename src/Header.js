import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket} from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import reducer from './reducer'
import './Header.css';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className='header'>
           <Link to='/'>
                <img 
                    className="header__logo" 
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                    alt='' 
                />
           </Link> 
           <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
           </div>
           <div className='header__nav'>
                <Link to={!user && '/Login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span  className='header__optionLineOne'>{user ? `Hello ${user.email}` : "Hello" }</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
                    </div>
                    
                </Link>

                <Link to='/Login' className='header__link'>
                    <div className='header__option'>
                        <span  className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                    
                </Link>

                <Link to='/Login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne' >Your</span>
                        <span  className='header__optionLineTwo'>Prime</span>
                    </div>
                    
                </Link>
                <Link to='checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingBasket/>
                        <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
                        
                    </div>
                </Link>

           </div>
           
           
           

        </nav>
    )
}

export default Header;
