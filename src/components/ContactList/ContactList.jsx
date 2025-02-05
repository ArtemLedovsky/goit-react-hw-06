import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactListWrap}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contactName={contact.name}
            contactNumber={contact.number}
            contactId={contact.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
