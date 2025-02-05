import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

const Contact = ({ contactName, contactNumber, contactId, onDelete }) => {
  return (
    <div className={s.contact}>
      <div>
        <p className={s.text}>
          <FaUserLarge />
          {contactName}
        </p>
        <p className={s.text}>
          <FaPhone />
          {contactNumber}
        </p>
      </div>
      <button onClick={() => onDelete(contactId)}>Delete</button>
    </div>
  );
};

export default Contact;
