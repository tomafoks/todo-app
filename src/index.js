import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/todo-list';
import AppHeder from './components/app-heder';
import SearchPanel from './components/search-panel';


const App = () => {
    return (
        <div>
            <AppHeder />
            <SearchPanel />
            <Todolist />
        </div>
    );
};

ReactDOM.render(<App />, 
    document.getElementById('root'));