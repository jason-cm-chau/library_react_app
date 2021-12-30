import React from 'react'
import {books} from '../data'
import Book from './ui/Book'

function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter(books => books.salePrice)
                        .slice(0,8)
                        .map((books)=> <Book books={books} id={books.id}/>) 
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discounted
