import { NAV } from '../../content';

const Navbar: React.FC = () => (
  <div className="topbar">
    <div className="wrap">
      <a className="brand" href="/#" aria-label="Back to top">
        Jacob Wu-Chen<span className="d">.</span>
      </a>
      <nav className="nav">
        {NAV.map((item) => (
          <a key={item.href} href={`/${item.href}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </div>
);

export default Navbar;
