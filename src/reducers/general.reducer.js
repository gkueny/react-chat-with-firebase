import {UPDATEFAKEMESSAGE} from '../actions/actions.type';

const initialState = {
    fakeMessage : 'default'
};

const generalReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATEFAKEMESSAGE : {

            return {
                ...state,
                fakeMessage: action.data.newFakeMessage
            };
        }

        default:

            return state;
    }
};

export default generalReducer;
