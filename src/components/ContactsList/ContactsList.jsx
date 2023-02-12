import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/api';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';



//const getFilteredContacts = (filter, contacts) => {
 // const filteredContact = filter.toLowerCase().trim();
 // return contacts.items.filter(contact => contact.name.toLowerCase().includes(filteredContact));
///};

export const ContactsList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);

  const getFilteredContacts = (filter, contacts) => {
    const filteredContact = filter.toLowerCase().trim();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filteredContact));
  };

  const filteredContacts = getFilteredContacts(filter, contacts);

  const handleDelete = (id) => dispatch(deleteContact(id));

return(
  <ul className={style.contactsList}>
  {filteredContacts.map(({id, name, phone}) => (
    <li key={id} className={style.contactsListItem}>
      <p>
        <span className={style.contactsListName}>{name}</span>
        <span className={style.contactsListName}>{phone}</span>
      </p>
      <button
        className={style.buttonDelete}
        type="submit"
        onClick={handleDelete}
      >
        delete
      </button>
    </li>
  ))}
</ul>
);
};

  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              phone: PropTypes.string.isRequired,
          })
    ),
    //onDeleteContact: PropTypes.func.isRequired,
  };
