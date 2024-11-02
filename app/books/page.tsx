import React from 'react'

const Page = async () => {
    const response = await fetch("http://localhost:3000/api/books");
    
    if (!response.ok) throw new Error("Fetch Failed");

    const books = await response.json();
    
    return (
        <ul>
            {books.length ? books.map((book: { id: number, title: string }) => {
                <li key={book.id} className='text-black'>{book.title}</li>
            }) : (
                <p className='text-black'>No available books</p>
            )} 
        </ul>    
    )
}

export default Page