"use client";

import Link from 'next/link';
import React from 'react'

const SearchFormResetButton = () => {

    // Reset search form inpute value
    const reset = () => {
        const form = document.querySelector('search-form') as HTMLFormElement;

        if (form) form.reset();
    }
        
    return (
        <button
            type="reset"
            onClick={reset}
            className='search-btn text-white'
        >
            <Link
                href="/"
            >
                X
            </Link>
        </button>
    )
}

export default SearchFormResetButton