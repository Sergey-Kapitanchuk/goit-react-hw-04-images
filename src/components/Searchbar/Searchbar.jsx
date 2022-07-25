import { Component } from "react";
import CSS from './Searchbar.module.css'
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';


export default class Searchbar extends Component {
    state = {
        searchQuery: "",
    };

    handelNameChange = e => {
        this.setState({
            searchQuery: e.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const query = this.state.searchQuery.trim();

        if (query !== '') {
            this.props.onSubmit(query);
        } else {
            toast.error('Enter a valid search query!')
        }
        this.setState({ searchQuery: "" })
    };


    render() {
        return (
            <header className={CSS.searchbar}>
                <form className={CSS.form} onSubmit={this.handleSubmit}>
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
                        value={this.state.searchQuery}
                        onChange={this.handelNameChange}
                    />
                </form>
            </header>
        )
    }
};