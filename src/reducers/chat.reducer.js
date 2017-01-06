import {UPDATEMESSAGES} from '../actions/actions.type';

const initialState = {
    messages : []
};

const chatReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATEMESSAGES : {

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        name : action.data.name,
                        text : action.data.message
                    }

                ]
            };
        }

        default:
        
            return state;
    }
};

export default chatReducer;
