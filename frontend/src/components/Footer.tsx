import { Link } from "react-router-dom"
import { DiGithubBadge } from "react-icons/di"
import { FaInstagram } from "react-icons/fa"
import { ICON_SIZE } from "@/consts/ParametricConsts"

// TODO implement responsive design and night mode
function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-footer-bg">
      <div className="w-[20%]">
        <ul className="flex items-center gap-4">
          <li>
            <Link to={"/help"}>Help</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div className="flex max-w-3/5 flex-col items-center justify-center">
        <span>© 2023 MySubscriptionsHub. All rights reserved.</span>
        <span>Terms of Service | Privacy Policy</span>
      </div>

      <div className="w-[20%]">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              to={"https://github.com/caiofmbarbosa"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiGithubBadge size={ICON_SIZE} />
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.instagram.com/caiofmbarbosa"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={ICON_SIZE} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
