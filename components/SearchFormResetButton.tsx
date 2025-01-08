"use client";

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const SearchFormResetButton = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Reset search form inpute value
    const reset = () => {
        const params = new URLSearchParams(searchParams.toString());

        params.delete("query");
        router.push(`?${params.toString()}`);
    }
        
    return (
        <button
            type="reset"
            onClick={reset}
            className='search-btn text-white'
        >
            <X className='size-5' />
        </button>
    )
}

export default SearchFormResetButton