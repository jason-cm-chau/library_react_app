import React from 'react';
import Book from './ui/Book';
import {books} from '../data';

function Featured() {
    return (
        <section id="features">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                    {books
                    .filter((books) => books.rating ===5)
                    .slice(0,4)
                    .map(books =>  <Book books={books} key={books.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Featured
