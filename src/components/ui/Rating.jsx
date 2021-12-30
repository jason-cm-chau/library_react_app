import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Rating({rating}) {
    return (
        <div className='book__rating'>
            {
                new Array(Math.floor(rating)).fill(<FontAwesomeIcon icon="star" />)
            }
            {
                !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
            }
        </div>
    )
}

export default Rating
