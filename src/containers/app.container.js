import {connect} from 'react-redux';

import {updateFakeMessage} from '../actions/general.actions';

import AppComponent from '../components/app.component';

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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
