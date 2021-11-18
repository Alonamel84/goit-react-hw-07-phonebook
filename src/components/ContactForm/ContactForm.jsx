import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css'
import  operations   from '../../redux/contacts/contacts-operations';
import {  useDispatch } from 'react-redux';
import shortid from 'shortid';

const ContactForm = ({ contact }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
     
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':  setName(e.target.value); break ;
      case 'number': setNumber(e.target.value); break ;
      default: return;
    }
    };
      
  const onFormSubmit = e => {
         e.preventDefault();
     e.target.name === 'name'?  setName(e.target.value) :  setNumber(e.target.value)
     if (contact.some(item => item.name.toLowerCase() === name.toLowerCase()))
            return alert(`${name} is already in contacts`);
    dispatch(operations.addContact({name, number, id: shortid.generate()}));
    setNumber('')
    setName('')
    };
    
        return(
        <>
         <form className={ s.form} onSubmit= {onFormSubmit}>
    <label className={ s.label}>
            Name
            <input
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={ s.label}>
            Number
            <input
              type="tel"
            name="number"
            placeholder="Enter phone number"
              pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}?\)?[-.\s]?\d
            {(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
              title="Номер телефона должен состоять цифр и
            может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>

                    <button className={ s.addButton} type="submit">Add contact</button>
        </form>

            </>
        )
    
};

// const mapDispatchToProps = {
//   addContact,
// };
export default ContactForm;

ContactForm.propTypes = {
  contact: PropTypes.array,
  onSubmit: PropTypes.func,
};
