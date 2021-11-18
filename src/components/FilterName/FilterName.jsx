import s from '../FilterName/FilterName.module.css'
import PropTypes from 'prop-types';
import operations from './../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
const FilterName = ({ onChange }) => {
    return(
        <>
            <label className={ s.label}>
          Find contacts by name
                <input name='filter'
            type="text"
            placeholder="Enter name"
            onChange={onChange}
                             
          />
    </label >
         
   </>
    )
};

const mapDispatchToProps = (dispatch) => ({
  filterContact:(filter) => dispatch(operations.filterContact(filter)),
});
export default connect(null, mapDispatchToProps)(FilterName);
FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
