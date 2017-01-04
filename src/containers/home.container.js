import {connect} from 'react-redux';

import {updateFakeMessage} from '../actions/general.actions';

import HomeComponent from '../components/home.component';

const mapStateToProps = (state) => {
    return {
        state: {
            general : state.general,
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFakeMessage: (newFakeMessage) => dispatch(updateFakeMessage(newFakeMessage))
    };
};

const HomepContainer = connect(
    mapStateToProps,
    mapDispatchToProps
 )(HomeComponent);

export default HomepContainer;
