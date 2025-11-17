import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; // Import from solid icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>Açaí Santa Rita do Sapucaí</h2>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUtensils} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUtensils} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
