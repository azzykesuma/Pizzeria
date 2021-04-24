import React from 'react'
import { Error } from './CheckOutElement'

const ErrMsg = ({children}) => {
    return (
        <Error>
            {children}
        </Error>
    )
}

export default ErrMsg
