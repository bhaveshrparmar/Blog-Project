export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="/">
          Blog Project
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/form">
                Add-Blog
              </a>
            </li>

            <li className="nav-item">
              <a
                className="btn btn-outline-info fw-semibold px-3"
                href="/changePass"
              >
                Change Pass
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
