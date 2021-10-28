import React from "react";
import styled from "styled-components";
import "./Footer.css";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-6">
              <h6>Earth Contact</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Juan Bernal</a>
                </li>
                <li>123 Earth Ln</li>
                <li>Milkey Way, 00000</li>
                <li>1 (800) 555-4107</li>
                <li>Jbernal@space_oddyssey.org</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-6">
              <h6>Mars Contact</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Ever Medina</a>
                </li>
                <li>123 Earth Ln</li>
                <li>Milkey Way, 00000</li>
                <li>1 (800) 555-4108</li>
                <li>Emedina@space_oddyssey.org</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-6">
              <h6>Moon Contact</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Aldo Quintero</a>
                </li>
                <li>123 Earth Ln</li>
                <li>Milkey Way, 00000</li>
                <li>1 (800) 555-4109</li>
                <li>Aquintero@space_oddyssey.org</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-6">
              <h6>Andromeda Galaxy</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Matt Griggs</a>
                </li>
                <li>123 Earth Ln</li>
                <li>Milkey Way, 00000</li>
                <li>1 (800) 555-4110</li>
                <li>Mgriggs@space_oddyssey.org</li>
              </ul>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="footer-bottom">
            <p>
              &copy;{new Date().getFullYear()} Space Oddyssey - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  ul li,
  .footer-bottom {
    font-size: 12px;
    font-weight: 200;
  }

  ul li a {
    color: var(--mainGray);
    font-weight: bold;
  }

  ul li a:hover {
    color: var(--mainLight);
  }

  @media (max-width: 500px) {
    ul li,
    .footer-bottom {
      font-size: 10px;
    }
    h6 {
      font-size: smaller;
    }
  }
`;
