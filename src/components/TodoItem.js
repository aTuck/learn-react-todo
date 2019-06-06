import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`;

const TodoTask = styled.div`
  background: #2f2f2f;
  padding: 15px;
  font-family: "roboto";
  text-transform: capitalize;
  width: 35%;
  min-height: 16px;
  border-radius: 15px 0px 0px 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  :hover {
    cursor: pointer;
    box-shadow: 0 5px 9px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  text-decoration: ${ props => props.completed === true ? 'line-through' : 'none'};
`;

const TodoTitle = styled.span`
  padding-left: 5px;

`;

const TodoDelBtn = styled.button`
  background: linear-gradient(to right, #cb0000, #be000e, #b10017, #a2001c, #940020);
  font-size: 18px;
  min-height: 46px;
  color: #fff;
  border: none;
  padding: 0px 16px;
  text-align: center;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  float: right;
`;

class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <TodoContainer>
        <TodoTask completed={completed} onClick={() => this.props.markComplete(id)}>
            <TodoTitle> { title } </TodoTitle>
        </TodoTask>
        <TodoDelBtn onClick={this.props.delTodo.bind(this, id)}>✖</TodoDelBtn>
      </TodoContainer>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem;
