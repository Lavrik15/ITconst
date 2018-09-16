import React, { Component } from 'react';

// class Item {
//     constructor(objectID, isRemoved = false, text) {
//         this.objectID = objectID;
//         this.isRemoved = isRemoved;
//         this.text = text;
//     }
// }

class AdminItem extends Component {
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
        return (
            <div className="admin-item">
                <form onSubmit={this.onSubmitItem}>
                    <textarea
                        className="admin-input"
                        cols="30"
                        rows="10"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    <button type="submit">
                        Add item
                        </button>
                </form>
            </div>
        );
    }
}

export default AdminItem;
