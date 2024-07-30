import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={() => {
                document.body.classList.remove("actives");
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
