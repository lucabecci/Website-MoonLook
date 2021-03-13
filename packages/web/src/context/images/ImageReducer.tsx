/* eslint-disable import/no-anonymous-default-export */
import {GET_IMAGES} from '../types'

export default (state: any, action: {payload: any, type: any}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {payload, type} = action

    switch (type) {
        case GET_IMAGES:
            return{
                ...state,
                images: payload.images
            }
    }
}