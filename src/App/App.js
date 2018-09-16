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
            lists,
            isAdminShow: true
        }
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
        this.onShowAdminBtnClick = this.onShowAdminBtnClick.bind(this);
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
    onShowAdminBtnClick() {
        const { isAdminShow } = this.state;
        this.setState({
            isAdminShow: !isAdminShow 
        });
    }
    render() {
        const { lists, isAdminShow } = this.state;
        return (
            <div className="content">
                <List
                    lists={lists}
                    onShowAdminBtnClick={this.onShowAdminBtnClick}
                    isAdminShow={isAdminShow}
                />
                <Admin
                    onTextAreaChange={this.onTextAreaChange}
                    lists={lists}
                    onRemoveBtnClick={this.onRemoveBtnClick}
                    isAdminShow={isAdminShow}
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