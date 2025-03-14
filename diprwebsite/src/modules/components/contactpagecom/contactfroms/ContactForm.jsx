import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { ContactFormContainer, ContactItem, ContactIcon } from './ContactForm.styles';
import { FontSizeContext } from '../../../../context/FontSizeProvider';
import { LanguageContext } from '../../../../context/LanguageContext'; // Import LanguageContext

// Translation object for English, Hindi, and Kannada
const translations = {
  English: {
    title: "Get In Touch With Us",
    description: "For any inquiries or information, please reach out to the Karnataka Directorate of Information and Public Relations at the following address:",
    directorate: "Directorate of Information and Public Relations, Karnataka",
    address: "Bengaluru, Karnataka, 560001",
    mailTitle: "Email",
    mail1: "dipr.karnataka@gmail.com",
    mail2: "info.dipr@karnataka.gov.in",
  },
  Hindi: {
    title: "हमसे संपर्क करें",
    description: "किसी भी जानकारी या प्रश्न के लिए, कृपया कर्नाटक सूचना और जनसंपर्क निदेशालय से निम्नलिखित पते पर संपर्क करें:",
    directorate: "सूचना और जनसंपर्क निदेशालय, कर्नाटक",
    address: "बेंगलुरु, कर्नाटक, 560001",
    mailTitle: "ईमेल",
    mail1: "dipr.karnataka@gmail.com",
    mail2: "info.dipr@karnataka.gov.in",
  },
  Kannada: {
    title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    description: "ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಮಾಹಿತಿಗಾಗಿ, ದಯವಿಟ್ಟು ಕರ್ನಾಟಕ ಮಾಹಿತಿ ಮತ್ತು ಜನಸಂಪರ್ಕ ನಿರ್ದೇಶನಾಲಯಕ್ಕೆ ಈ ಕೆಳಗಿನ ವಿಳಾಸದಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ:",
    directorate: "ಮಾಹಿತಿ ಮತ್ತು ಜನಸಂಪರ್ಕ ನಿರ್ದೇಶನಾಲಯ, ಕರ್ನಾಟಕ",
    address: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, 560001",
    mailTitle: "ಇಮೇಲ್",
    mail1: "dipr.karnataka@gmail.com",
    mail2: "info.dipr@karnataka.gov.in",
  },
};

const ContactForm = () => {
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext); // Get current language from context

  // Get translations for the current language
  const t = translations[language] || translations.English;

  return (
    <ContactFormContainer>
      <h2 style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>{t.title}</h2>
      <p style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>{t.description}</p>
      <div className="contact-info">
        {/* Address Section */}
        <ContactItem style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <ContactIcon style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} as={FaMapMarkerAlt} />
          <div style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            <h4>{t.directorate}</h4>
            <p>{t.address}</p>
          </div>
        </ContactItem>

        {/* Email Section 1 */}
        <ContactItem style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <ContactIcon style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} as={FaEnvelope} />
          <div style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            <h4>{t.mailTitle}</h4>
            <p>{t.mail1}</p>
          </div>
        </ContactItem>

        {/* Email Section 2 */}
        <ContactItem style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          <ContactIcon style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined} as={FaEnvelope} />
          <div style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            <h4>{t.mailTitle}</h4>
            <p>{t.mail2}</p>
          </div>
        </ContactItem>
      </div>
    </ContactFormContainer>
  );
};

export default ContactForm;