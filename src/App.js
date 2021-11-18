import ContactForm from './components/ContactForm';
import './App.css';
import FilterName from './components/FilterName';
import ContactList from './components/ContactsList/ContactsList';
import s from './components/data/data.module.css';
import { useDispatch, useSelector } from 'react-redux';
import operations from './redux/contacts/contacts-operations';
// import shortid from 'shortid';
import { filterContactSuccess } from './redux/contacts/actions';
import { getNameFilter, getContacts } from './redux/contacts/contacts-selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const manualFilter = useSelector(getNameFilter);

  function filterName(e) {
    e.preventDefault();
    dispatch(filterContactSuccess(e.currentTarget.value));
  }

  const filterArr = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(manualFilter.toLowerCase()),
    );
  };

  const onDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  const filterContacts = filterArr();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm contact={contacts}></ContactForm>
      <h2 className={s.title}>Contacts</h2>
      <FilterName onChange={filterName}></FilterName>
      <ContactList filterContacts={filterContacts} onDelete={onDelete}></ContactList>
    </div>
  );
};

export default App;
