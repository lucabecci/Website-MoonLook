import { useReducer } from 'react'
import {GET_IMAGES} from '../types'
import ImageReducer from './ImageReducer'

const ImageState = (props: any) => {
    const initialState = {
        images: []
    }

    const [state, dispatch] = useReducer(ImageReducer, initialState)

    const getImages = async() => {
        
    }
}