import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputValue = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="name"
        onChange={handleInputValue}
      ></FilterInput>
    </FilterLabel>
  );
};
