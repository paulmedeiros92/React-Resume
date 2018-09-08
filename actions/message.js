import { SET_MESSAGE } from '../types/message';
export const setMessage = message => {
    return dispach => {
        dispach({
            type: SET_MESSAGE,
            payload: {
                message
            }
        })
    }
}
