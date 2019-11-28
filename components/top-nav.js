import Link from 'next/link';
import './top-nav.scss';

const TopNav = () => (
    <header>
        <h4 className="brand-name"><Link href="/"><a>Movie DB</a></Link></h4>
        <nav>
            <ul className="nav-links">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/tvshows"><a>TV Shows</a></Link></li>
                <li><Link href="/movies"><a>Movies</a></Link></li>
                <li><Link href="/anime"><a>Anime</a></Link></li>
            </ul>
        </nav>
        <div className="user-actions">
            <button>Sign Up</button>
            <button className="white">Login</button>
        </div>
    </header>
);

export default TopNav;