import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';

import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContact } from './Filter/Filter';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/api';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

//  const handleSubmit = event => {
 //  event.preventDefault();
  //const form = event.target;
  //  const name = event.target.name.value;
  //  const phone = event.target.phone.value;
   // if (contacts.items.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
   //   return alert(`${name} is already in contacts`);
   // }
   // dispatch(addContact({ name, phone }));
   // event.target.reset();
  //};

  //const handleChange = event => {
  //  dispatch(setFilter(event.target.value));
  //};

  //const deleteContactItem = (id) => dispatch(deleteContact(id));

  //const getFilteredContacts = (filter, contacts) => {
  //    const filteredContact = filter.toLowerCase().trim();
  //    return contacts.items.filter(contact => contact.name.toLowerCase().includes(filteredContact));
  //};
  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts.items)
    return (
      <div className= {style.mainDiv} >
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm 
        //onSubmit={handleSubmit}
        />
        <h2 className={style.title}>Contacts</h2>
        {isLoading && !error && <p>Loading.....</p>}
        {contacts.items.length > 0 ? (
        <>
        <FilterContact 
        //filter={filter} 
        //handleChange={handleChange} 
        />
        <ContactsList 
        //contacts={getFilteredContacts()} onDeleteContact={deleteContactItem}
        />
        </>
        ) : (
          <div>
              Your phone book is empty at the moment
          </div>
        )}
      </div> 
    );
};
  
  
  
  
  
  
  
 // const handleSubmit = (data) => {
    //const name =event.target
  //  const duplicate = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
  //  if (duplicate) { return alert(`${data.name} is already in contacts`); }
  //  data.id = nanoid();

  //  dispatch(addContact(data))
  //};
  
  //const handleChange = event => {
    //const { value } = event.target.value;
    //dispatch(setFilter(event.target.value));
  //};

    //const deleteContactItem = () => dispatch(deleteContact(id));


  //const getFilteredContacts = () => {
   /// if (!filter) return contacts;
    //  const filteredContact = filter.toLowerCase();
     // return contacts.filter(contact => contact.name.toLowerCase().includes(filteredContact));
    //onst normalizedFilter = filter.toLowerCase();

    //return contacts.filter(contact =>
     // contact.name
      //toLowerCase().includes(normalizedFilter)
    //);
  //};

   // return filterContactsList;
  //};


//};

