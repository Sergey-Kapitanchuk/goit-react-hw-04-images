import { Component } from "react";
import CSS from './Searchbar.module.css'
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';


export default class Searchbar extends Component {
    state = {
        imageName: "",
    };

    handelNameChange = e => {
        this.setState({
            imageName: e.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const query = this.state.imageName.trim();

        if (query !== 0) {
            this.props.onSubmit(query);
        } else {
            toast.error('Enter a valid search query!')
        }
        this.setState({ imageName: "" })
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
                        value={this.state.imageName}
                        onChange={this.handelNameChange}
                    />
                </form>
            </header>
        )
    }
};