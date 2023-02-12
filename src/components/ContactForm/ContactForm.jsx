//import { useState } from 'react';
import style from './ContactForm.module.css';
//import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/api';


export const ContactForm = () => {
  //const [name, setName] = useState('');
  //const [number, setNumber] = useState('');

  //const handleChange = event => {
   // const { name, value } = event.target;
    
   // switch (name) {
    //  case 'name':
    //    setName(value);
    //    break;

     // case 'number':
     //   setNumber(value);
     //   break;

     //   default:
      //    return;
   // }
  //};

  //const handleSubmit = event => {
     // event.preventDefault();

     /// onSubmit({name, number});
      
     // reset(); 
 // };
  
   //const reset = () => {
     // setName('');
     // setNumber('');
    //};
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
      event.preventDefault();
     //const form = event.target;
       const name = event.target.name.value;
       const phone = event.target.phone.value;
       if (contacts.items.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
         return alert(`${name} is already in contacts`);
       }
       dispatch(addContact({ name, phone }));
       event.target.reset();
     };

  return (
      <form className={style.phonebookInputs} onSubmit={handleSubmit}>
        <label className={style.phonebookInput}>
          <h4 className={style.phonebookInputTitle}>Name:</h4>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
             // value={name}
              //onChange={handleChange}
            />
        </label>
        <label className={style.phonebookInput}>
          <h4 className={style.phonebookInputTitle}>Number:</h4>
            <input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
             // value={number}
              //onChange={handleChange}
            />
        </label>
        <button type="submit" className={style.buttonAdd}>
          add contact
        </button>
      </form>
    );
  }


//ContactForm.propTypes = {
 //   onSubmit: PropTypes.func.isRequired,
//};
