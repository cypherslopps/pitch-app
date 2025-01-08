import Form from 'next/form'
import React from 'react'
import { Search } from 'lucide-react';

import SearchFormResetButton from './SearchFormResetButton';

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form
            action="/"
            scroll={false}
            className="search-form"
        >
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {query && (
                    <SearchFormResetButton />
                )}
                
                <button
                    type="submit"
                    className="search-btn text-white"
                >
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm