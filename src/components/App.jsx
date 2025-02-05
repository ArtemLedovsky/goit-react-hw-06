import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";
import s from "./App.module.css";
import { useEffect } from "react";

const INIT_STATE = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const savedData = JSON.parse(window.localStorage.getItem("contacts"));
  // const [contacts, setContacts] = useState(INIT_STATE);
  const [filteredContacts, setFilteredContacts] = useState("");
  const [contacts, setContacts] = useState(() => {
    if (savedData && savedData.length > 0) {
      return savedData;
    }
    return INIT_STATE;
  });
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filteredContacts} onFilter={setFilteredContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
