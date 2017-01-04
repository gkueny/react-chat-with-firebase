import {UPDATEFAKEMESSAGE} from './actions.type';

export function updateFakeMessage(newFakeMessage) {

    return {
        type: UPDATEFAKEMESSAGE,
        data: {
            newFakeMessage
        }
    };
}
