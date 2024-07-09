import Link from "next/link";
function Header() {
    return ( <>
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container-fluid">
                <Link className="navbar-brand pe-5 fw-bold" href="/">E-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                    <li className="nav-item">
                    <Link className="nav-link fw-bold" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold" href="/Products">Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold" href='/Aboutus'>About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold" href='/Contactus'>Contact Us</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </> );
}

export default Header;