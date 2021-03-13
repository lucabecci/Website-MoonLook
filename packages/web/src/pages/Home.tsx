import React, { Fragment } from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Steps from '../components/Steps'

interface Props {
    
}

const Home: React.FC = (props: Props) => {
    return (
        <Fragment>
            <Header/>
            <Info/>
            <Steps/>
        </Fragment>
    )
}

export default Home