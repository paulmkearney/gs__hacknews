import React, { useEffect, useState } from 'react';
import './header.scss';
import Menu from '../menu/menu';
function HackerHeader() {
  return (
    <header className="header ">
      <div className="header__cell">
        <a className="header__logo" href="#">
          <span className="logo__image">
            <svg width="30" height="30" viewBox="0 0 192 192">
              <rect
                x="4"
                y="4"
                width="188"
                height="188"
                fill="#f60"
                stroke="#fff"
              ></rect>
              <path
                d="M 73.25217560011882,45.01 L 96,92.40130083308577 L 118.74782439988117,45.00999999999999 L 138.31352071473736,45.01 L 103.99,109.49661467617327 L 103.99,150.99 L 88.01,150.99 L 88.01,109.49661467617327 L 53.686479285262635,45.010000000000005 Z"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span className="logo__text">Hacker News</span>
        </a>
      </div>
      <div className="header_cell cell__end">
        <Menu />
      </div>
    </header>
  );
}

export default HackerHeader;
