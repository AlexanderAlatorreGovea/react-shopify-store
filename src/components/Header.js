import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../redux/side-nav/side-nav.action";

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sideNav.opened);
  const [state, setstate] = useState(initialState);

  const showNav = () => {
    dispatch(actions.showSideNav());
  };

  const hideSidewNav = () => {
    dispatch(actions.hideSideNav());
  };

  return (
    <>
      <AnnouncementBar />
      <header className="header header1">
        <div className="header1__logo">
          <div className="header1__logo-image">
            <a href="/link">
              <img
                srcset="//cdn.shopify.com/s/files/1/0581/1503/1247/files/Pngtree_golden_classical_european_wedding_newcomer_4997848_3_80x.png?v=1625842909 1x, //cdn.shopify.com/s/files/1/0581/1503/1247/files/Pngtree_golden_classical_european_wedding_newcomer_4997848_3_80x@2x.png?v=1625842909 2x"
                alt="Alexander store logo"
              />
            </a>
          </div>

          <div className="header1__collections-nav">
            <div href="/link" className="header1__collection-link">
              Link top <i className="fas fa-chevron-down"></i>
              <ul className="collection-link__sub-links">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
            <a href="/link" className="header1__collection-link">
              Link
            </a>
            <a href="/link" className="header1__collection-link">
              Link
            </a>
          </div>
        </div>
        <div className="header1__collections-nav">
          <form>
            <input type="search" name="q" type="hidden" />
            <button aria-label="Search" href="/cart">
              <i className="fas fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <a>
            <i className="fas fa-shopping-bag"></i>
          </a>
          <a href="/cart">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </header>
    </>
  );
};

const AnnouncementBar = () => {
  return (
    <div className="announcement__bar" role="region" aria-label="Announcement">
      <p className="announcement__bar--message">Welcome to our store</p>
    </div>
  );
};

export default Header;
