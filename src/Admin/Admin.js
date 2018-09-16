import React, { Component } from 'react';
import AdminItem  from './Item/Item';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitItem = this.onSubmitItem.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    onSubmitItem(event) {
        event.preventDefault();
        this.props.onTextAreaChange(this.state.value);
    }

    render() {
        const { lists, onRemoveBtnClick } = this.props;
        return (
            <div className="admin">
                {lists.map((item) =>
                    <div key={item.objectID} className="admin-item">
                        <span className="admin-title">Item #{item.objectID}</span>
                        <form onSubmit={this.onSubmitItem}>
                            <textarea
                                className="admin-input"
                                cols="30"
                                rows="10"
                                value={item.text}
                                onChange={this.handleChange}
                            >
                            </textarea>
                            <button
                                type="button"
                                onClick={() => onRemoveBtnClick(item.objectID)}
                            >
                                {
                                    (item.isRemoved) ?
                                        "Restore" :
                                        "Remove"
                                }
                            </button>
                        </form>
                    </div>
                )}
                <AdminItem
                    onTextAreaChange={this.props.onTextAreaChange}
                />
            </div>
        );
    }
}

export default Admin;