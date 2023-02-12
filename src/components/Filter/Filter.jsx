//import PropTypes from 'prop-types';
import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

 export const FilterContact = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={style.filterLabel}>
      Find contacts by name
        <input
          type="text"
          name="filter"
          //value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
    );
 };
  
  //FilterContact.propTypes = {
  //  filter: PropTypes.string.isRequired,
   // handleChange: PropTypes.func.isRequired,
  //};