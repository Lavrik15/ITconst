import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { lists, onShowAdminBtnClick, isAdminShow } = this.props;
        return (
            <div className="list-wrapper">
                <ul className="list">
                    {lists.map(item => item.isRemoved ? null : <li key={item.objectID}>{item.text}</li>)}
                </ul>
                <button
                    className="btn-menu"
                    type="button"
                    onClick={onShowAdminBtnClick}
                >
                    {(isAdminShow)? "Close menu": "Open menu"}
                </button>
            </div>
        );
    }
}

export default List;


