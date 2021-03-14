import { useReducer } from 'react'
import {GET_IMAGES} from '../types'
import ImageReducer from './ImageReducer'

import firstGif from '../../assets/gifs/Step1.gif'
import secondGif from '../../assets/gifs/Step2.gif'
import thirdGif from '../../assets/gifs/Step3.gif'
import fourGif from '../../assets/gifs/Step4.gif'
import ImageContext from './ImagesContext'

const ImageState = (props: any) => {
    const initialState = {
        images: []
    }

    const [state, dispatch] = useReducer(ImageReducer, initialState)

    const getImages = () => {
        const arr = [firstGif, secondGif, thirdGif, fourGif]
        dispatch({type: GET_IMAGES, payload:arr})
    }

    return (
        <ImageContext.Provider
            value={{
                images: state.images,
                getImages
            }}
        >
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageState