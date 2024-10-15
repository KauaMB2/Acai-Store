import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; // Import from solid icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>Açaí Mania - Santa Rita do Sapucaí</h2>
        <div className="social-links">
          <a href="https://instadelivery.com.br/acaimaniasantarita" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUtensils} />
          </a>
          <a href="https://www.instagram.com/acaimaniast/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.ifood.com.br/delivery/santa-rita-do-sapucai-mg/acai-mania-centro/a883d592-b451-4c51-991e-6f183d074405?utm_medium=ReserveGoogle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faUtensils} />
          </a>
          <a href="https://www.facebook.com/acaimaniasrs/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
