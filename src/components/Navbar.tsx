import Auth from "./Auth";
import "../styles/Navbar.css";

const UserBadge = ({ name, src }) => {
    return (
        <div className="user-badge">
            <span className="name"> {name} </span>
            <img className="avi" src={src} />
        </div>
    );
};

const Navbar = ({ userName, userImg }) => {
    return (
        <nav>
            <div class="nav-container">
                <ul class="nav-link">
                    <li>
                        <a href="/">
                            <span class="logo">mixtify</span> <em>for Spotify</em>
                        </a>
                    </li>
                    <li>
                        <a href="/toptracks">Top Tracks</a>
                    </li>
                    <li>
                        <a href="/topartists">Top Artists</a>
                    </li>
                </ul>
                <ul>
                    {userName ? <UserBadge name={userName} src={userImg} /> : <Auth />}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
