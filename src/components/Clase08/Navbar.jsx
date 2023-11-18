import { Link } from "react-router-dom"

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg text-bg-dark">
  <div className="container-fluid">
   
    <button className="navbar-toggler text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-bg-secondary rounded-3 m-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-bg-secondary rounded-3 m-2" to="/clase08">Clase 08</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/clase09">Clase 09</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/login2">Login 2.0</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/login3">Login 3.0</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/task2">Task 2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/clase10">Clase 10</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/clase11">Clase 11</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-bg-secondary rounded-3 m-2" to="/clase12">Clase 12</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}

export {Navbar}