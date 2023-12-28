import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <h1>My World</h1>
        <main>
            <a href={"/#home"}>Home</a>
            <Link to={"/contact"}>Contact</Link>
            <a href={"/#about"}>about</a>
            <a href={"/#brands"}>Brands</a>
            <Link to={"/Services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header