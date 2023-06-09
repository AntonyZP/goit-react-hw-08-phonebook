import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase().trim();

  const visibleContacts = contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filterValue);
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
