import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AnnouncementBar />
      <header className="header header1">
        <div className="header1__logo">
          <div className="header1__logo-image">
            <a href="/link">Company</a>
          </div>

          <div class="header1__collections-nav">
            <a href="/link" class="header1__collection-link">
              Link top <i class="fas fa-chevron-down"></i>
              <ul class="collection-link__sub-links">
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
            </a>
            <a href="/link" class="header1__collection-link">
              Link
            </a>
            <a href="/link" class="header1__collection-link">
              Link
            </a>
          </div>
        </div>
        <div className="header1__collections-nav">
          <form>
            <input type="search" name="q" type="hidden" />
            <button aria-label="Search" href="/cart">
              <i class="fas fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <a>
            <i className="fas fa-shopping-cart"></i>
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
