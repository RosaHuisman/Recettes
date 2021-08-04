import { connect } from 'react-redux';
import Field from 'src/components/LoginForm/Field';
import { changeFieldValue } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   onChange: (value) => {
     console.log('je suis dans le onchange, du containers field')
    const action = changeFieldValue(ownProps.name, value);
    console.log(action)
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

 

