// components/Layout.js
import Link from 'next/link';


const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
