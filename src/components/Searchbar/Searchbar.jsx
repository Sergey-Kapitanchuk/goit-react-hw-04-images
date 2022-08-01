import { useState } from "react";
import CSS from './Searchbar.module.css'
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';


export default function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handelNameChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() !== '') {
            onSubmit(searchQuery.trim());
        } else {
            toast.error('Enter a valid search query!');
        }
        setSearchQuery('');
    };



    return (
        <header className={CSS.searchbar}>
            <form className={CSS.form} onSubmit={handleSubmit}>
                <button type="submit" className={CSS.button}>
                    <span className={CSS.button_label}>
                        <ImSearch />
                        Search
                    </span>
                </button>

                <input
                    className={CSS.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={handelNameChange}
                />
            </form>
        </header>
    );

};