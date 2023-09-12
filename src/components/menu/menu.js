import React, { useEffect, useState } from 'react';
import './menu.scss';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const btnMenu = `btn__menu ${isMenuOpen ? 'menu__opened' : 'menu__closed'}`;
    const btnMenuAria = isMenuOpen ? 'close menu' : 'open menu';
   
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
      };
  return (
    <>
        <button type='button' className={btnMenu} onClick={toggleMenu} aria-label={btnMenuAria}>Menu </button>

        {isMenuOpen && (<div className='nav__container'>
            <ul className='nav__menu'>
                <li>
                    <div className='form__field'>
                        <label className='form__label' for="searchbox">Search</label>
                        <input type='text' className='form__control' id='searchbox' />
                        <button className="btn__submit">Search</button>
                    </div>
                </li>
                <li><a href='#'>New</a></li>
                <li><a href='#'>Past</a></li>
                <li><a href='#'>Comments</a></li>
                <li><a href='#'>Ask</a></li>
                <li><a href='#'>Show</a></li>
                <li><a href='#'>Jobs</a></li>
                <li><a href='#'>Submit</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
        )}
    </>
  );
}

export default Menu;