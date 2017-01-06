import {UPDATEMESSAGES} from './actions.type';

export function updateMessage(name, message) {

    return {
        type: UPDATEMESSAGES,
        data: {
            name,
            message
        }
    };
}
