import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice'; // action'ı buradan çekiyoruz
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <p>👤 {contact.name}</p>
      <p>📞 {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}