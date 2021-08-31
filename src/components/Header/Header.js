import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../redux/side-nav/side-nav.action";

import "./Header.scss";

//import { fetchPosts } from "../redux/posts/posts.actions";

const Header = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sideNav.opened);
  // const { posts, isFetching, errorMessage } = useSelector(
  //   (state) => state.posts
  // );
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const showNav = () => {
    dispatch(actions.showSideNav());
  };

  const hideSidewNav = () => {
    dispatch(actions.hideSideNav());
  };

  const openDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  const openSearchBarHandler = (e) => {
    e.preventDefault();
    setOpenSearchBar(!openSearchBar);
  };

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  return (
    <>
      <AnnouncementBar />
      <header className="header header1" data-testid="header">
        <div className="header1__logo">
          <div className="header1__logo-image">
            <a href="/link">
              <img
                srcSet="//cdn.shopify.com/s/files/1/0581/1503/1247/files/Pngtree_golden_classical_european_wedding_newcomer_4997848_3_80x.png?v=1625842909 1x, //cdn.shopify.com/s/files/1/0581/1503/1247/files/Pngtree_golden_classical_european_wedding_newcomer_4997848_3_80x@2x.png?v=1625842909 2x"
                alt="Alexander store logo"
              />
            </a>
          </div>

          <div className="header1__collections-nav">
            <div className="header1__collection-link pointer">
              Catalog<i className="fas fa-chevron-down"></i>
              <ul className="collection-link__sub-links">
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Hats</a>
                </li>
              </ul>
            </div>
            <a href="/link" className="header1__collection-link">
              Home
            </a>
            <a href="/link" className="header1__collection-link">
              Contact
            </a>
          </div>
        </div>
        <div className="header1__collections-nav">
          <div className="form">
            <form>
              <input
                id="search"
                type="search"
                placeholder="search"
                name="q"
                className={`${openSearchBar ? "active" : ""}`}
              />
            </form>
            <button
              onClick={openSearchBarHandler}
              aria-label="Search"
              href="/cart"
              data-testid="search-icon"
            >
              <i
                data-testid="fa-times"
                className={`fas ${openSearchBar ? "fa-times" : "fa-search"}`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <a>
            <i className="fas fa-shopping-bag"></i>
          </a>
          <a href="/cart">
            <i className="fas fa-user"></i>
          </a>
        </div>

        <div className="header1__collections-burger">
          <div
            onClick={openDrawerHandler}
            data-testid="hamburger"
            className={`header1__collections-burger menu-btn ${
              openDrawer ? "open" : ""
            }`}
          >
            <div className="header1__collections-burger menu-btn__burger"></div>
          </div>
        </div>
 
        <Drawer id={"navigation"} openDrawer={openDrawer}>
          <ul
            data-testid="drawer"
            className={`${openDrawer ? "drawer--active" : ""}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Drawer>
      </header>
    </>
  );
};

const Drawer = ({ children, openDrawer, id }) => {
  return (
    <aside
      id={id}
      role="navigation"
      className="drawer"
      aria-hidden={openDrawer ? "false" : "true"}
      tabIndex="0"
    >
      {children}
    </aside>
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
