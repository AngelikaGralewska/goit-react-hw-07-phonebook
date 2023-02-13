import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContact } from './Filter/Filter';

import { selectContacts,selectIsLoading, selectError} from 'redux/selectors';
import { fetchContacts } from 'redux/api';

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
      <div className= {style.mainDiv} >
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.title}>Contacts</h2>
        {isLoading && !error && <div isLoading={isLoading} className={style.text}>Loading...</div>}
        {contact.items.length > 0 ? (
        <>
        <FilterContact />
        <ContactsList />
        </>
      ) : (
        <div className={style.text}>
          Your phone book is empty, your first contact has been added
        </div>
      )}
      </div> 
    );
};