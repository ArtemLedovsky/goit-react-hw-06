import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactListWrap}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contactName={contact.name}
            contactNumber={contact.number}
            contactId={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
