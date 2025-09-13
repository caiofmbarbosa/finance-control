import { Link } from "react-router-dom"

// TODO implement responsive design and night mode
function Header() {
  return (
    <header className="flex items-center justify-evenly p-4 shadow-md/10">
      <h1>My App</h1>

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/subscriptions"}>Subscriptions</Link>
          </li>
          <li>
            <Link to={"/manage-subscription"}>Edit Subscription</Link>
          </li>
          <li>
            <Link to={"/settings"}>Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
