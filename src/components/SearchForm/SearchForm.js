import React, { Component } from 'react';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.query === '') return toast.warning('Введите запрос');
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form
        className={s.searchForm}
        id="search-form"
        onSubmit={this.onSubmitForm}
      >
        <input
          className={`${s.formInput} form-control`}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Найти кино..."
          onChange={this.handleChange}
          value={this.state.query}
        />

        <button className={s.btnSub} type="submit">
          <span className={`material-icons ${s.movieSearch}`}>search</span>
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
