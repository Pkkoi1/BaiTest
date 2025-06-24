import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FooterContact = () => (
  <div>
    <p className="text-left">
      Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit
      erat lorem et magna ipsum dolore amet erat.
    </p>
    <div className="flex items-start gap-2 mb-[20px]">
      <FaMapMarkerAlt className="mt-1" />
      <span>123 Street, New York, USA</span>
    </div>
    <div className="flex items-start gap-2 mb-[20px]">
      <FaEnvelope className="mt-1" />
      <span>info@example.com</span>
    </div>
    <div className="flex items-start gap-2">
      <FaPhoneAlt className="mt-1" />
      <span>+012 345 67890</span>
    </div>
  </div>
);

export default FooterContact;
