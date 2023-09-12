import React, { useEffect, useState } from 'react';
import './footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <ul className="footer__list">
          <li>
            <a href="#">Guidelines</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Lists</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Apply to YC</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
