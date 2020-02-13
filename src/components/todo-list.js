import React from 'react';
import TodoListItem from './todo-list-item';

const Todolist = () => {
    return (
        <ul>
            <li><TodoListItem label = "Drink cofee" important = { false } /></li>
            <li><TodoListItem label = "Build React Apps" important = { true }  /></li>
            <li><TodoListItem label = "Вот так вот!" important = { false } /></li>
        </ul>
    );
};

export default Todolist;