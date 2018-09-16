import React, { Component } from 'react';
import Admin from '../Admin/Admin';
import List from '../List/List';

import "./App.css";


const lists = [
    {
        objectID: 1,
        text: "Сидор Сидоров \n директор",
        isRemoved: false
    },
    {
        objectID: 2,
        text: "Петр Петров \n менеджер",
        isRemoved: false
    },
    {
        objectID: 3,
        text: "Руслан Баширов \n менеджер",
        isRemoved: false
    }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists
        }
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
    }
    onTextAreaChange(content) {
        const objectID = this.state.lists.length + 1;
        const item = new Item(objectID, content)
        this.setState(() => this.state.lists.push(item));
    }
    onRemoveBtnClick(id) {
        const { lists } = this.state;
        const elems = lists.map(item => {
            if (item.objectID === id) item.isRemoved = !item.isRemoved;
            return item;
        });
        this.setState({ lists: elems });
    }
    render() {
        const { lists } = this.state;
        return (
            <div className="content">
                <List
                    lists={lists}
                />
                <Admin
                    onTextAreaChange={this.onTextAreaChange}
                    lists={lists}
                    onRemoveBtnClick={this.onRemoveBtnClick}
                />
            </div>
        );
    }
}

function Item(objectID, text) {
    this.objectID = objectID;
    this.text = text;
    this.isRemoved = false;
}

export default App;