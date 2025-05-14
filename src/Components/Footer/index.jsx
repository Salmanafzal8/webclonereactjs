import { useState, useEffect } from "react";
import "./index.css";
import ContainedButton from "../../Components/ContainedButton";
import ChatButton from "../../Components/ChatButton";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const languages = ["English", "Hindi", "Urdu"];

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.custom-dropdown')) {
        setLangOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>POWUR</h4>
          <ul>
            <li>Why Solar</li>
            <li>FAQ</li>
            <li>Join Powur</li>
            <li>Partner With Powur</li>
            <li>Enterprise</li>
            <li>Ambassador</li>
            <li>Powur Login</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>Our Team</li>
            <li>Our Mission</li>
            <li>State Licenses</li>
            <li>Income Disclosure</li>
            <li>Careers</li>
            <li>Store</li>
            <li>Powur Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>
          <ChatButton style={{background:"white", color: "black"}} />
          <p className="need-help">Need Help?</p>
          <a className="email-link" href="">Support@Powur.Com</a>
        </div>

        <div className="footer-column quote-column">
          <h4>GET QUOTE</h4>
          <div className="buttons">
            <input
              style={{ opacity: "50%", padding: "10px 10px" }}
              className="zip-input"
              type="text"
              placeholder="ENTER ZIP CODE"
            />
            <ContainedButton text={"StartNow"} />
          </div>
                <h4 className="language-label">LANGUAGE</h4>
      <div
        className="custom-dropdown"
        tabIndex={0}
        onClick={() => setLangOpen(!langOpen)}
      >
        
        <div className="dropdown-display"><CiGlobe style={{font:"10px", paddingTop:"3px"}} className="globe-icon" />{selectedLang} ▾</div>
        {langOpen && (
          <ul className="dropdown-options">
            {languages.map((lang) => (
              <li key={lang} onClick={() => setSelectedLang(lang)}>
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={selectedLang === lang}
                  onChange={() => setSelectedLang(lang)}
                />
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          The information contained in this document does not constitute an offer to sell securities or a solicitation of an offer to buy securities. The purchase or sale of securities of Powur or its affiliates may only be effected by the offering of related definitive memorandums and agreements, which will be provided to qualified investors on a confidential basis upon request for their consideration in connection with such offering. Investing will involve significant risks, including loss of principal, and investment products will have limited liquidity options. None of the information contained in this document is a recommendation.
        </p>
        <p className="copyright">© Powur PBC 2012–2025, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
