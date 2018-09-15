import React from 'react';
import "./App.css";

export default class App extends React.Component {
    // constructor() {
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <div className="content">
                <div className="list-wrapper">
                    <ul className="list">
                        <li>Василий Петров<br />директов</li>
                        <li>Иван Иванович<br />бухгалтер</li>
                        <li>Руслан Баширов<br />менджер</li>
                    </ul>
                    <button className="btn-menu" type="button">Close menu</button>
                </div>
                <div className="admin">
                    <div className="admin-item">
                        <span className="admin-title">Item #1</span>
                        <textarea className="admin-input" name="" id="" cols="30" rows="10"></textarea>
                        <button type="button">Remove</button>
                    </div>
                    <button>Add item</button>
                </div>
            </div>
        );
    }
}