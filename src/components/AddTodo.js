import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions'

const AddTodoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 40%
`;

const AddTodoTextBox = styled.input`
  flex: 1 70%
  border: none;
  border-bottom: 1px solid;
  font-size: 24px;
  background: #201e1e;
  color: #fff;
  autofill: false;

  :focus {
    outline: none;
  }
`;

const AddTodoSubmitBtn = styled.button`
  flex: 1 30%
  font-size: 16px;
  background: linear-gradient(to right,#ff8a00,#da1b60);
  border: none;
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 15px
  color: #fefefe
  font-weight: 700;
  font-family: 'Monteserrat', sans-serif; 

  :hover {
    transform: translate(0px, -1px);
  }

  :active, :focus {
    outline: none;
  }
`;

class AddTodo extends Component {
  state = {
    title: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <AddTodoForm onSubmit={this.onSubmit}>
        <AddTodoTextBox 
          type="text" 
          name="title"
          placeholder=" Add Todo..."
          autoComplete="off"
          value={this.state.title}
          onChange={this.onChange}
        />
        <AddTodoSubmitBtn
          type="submit" 
          value="Submit"
          className="btn"
        > Submit </AddTodoSubmitBtn>
      </AddTodoForm>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);