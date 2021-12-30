import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import Rating from './Rating'
import Price from './Price'

function Book({ books }) {
    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(()=>{
        const image = new Image();
        image.src = books.url;
        image.onload = () => {
            setTimeout(()=>{
                if(mountedRef.current){
                    setImg(image);
                }
            },300)
        }
        return ()=>{
            mountedRef.current = false
        }
    })
    return (
        <div className="book">
            {
                img ?
                    <>
                        <Link to={`/books/${books.id}`}>
                            <figure className="book__img--wrapper">
                                <img src={img.src} alt="" className="book__img"/>
                            </figure>
                        </Link>
                        <div className="book__title">
                            <Link to={`/books/${books.id}`} className="book__title--link">
                                {books.title}
                            </Link>
                        </div>
                        <div className="book__ratings">
                            <Rating rating={books.rating} />
                        </div>
                        <div className="book__price">
                            <Price salePrice={books.salePrice} originalPrice={books.originalPrice} />
                        </div>
                    </> :
                    <>
                        <div className="book__img--skeleton"></div>
                        <div className="skeleton book__title--skeleton"></div>
                        <div className="skeleton book__rating--skeleton"></div>
                        <div className="skeleton book__price--skeleton"></div>

                    </>
            }
        </div>
    )
}

export default Book
