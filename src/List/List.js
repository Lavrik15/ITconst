import React from "react";

const List = ({lists}) =>
    <div className="list-wrapper">
        <ul className="list">
            {lists.map(item => item.isRemoved ? null : <li key={item.objectID}>{item.text}</li>)}
        </ul>
        <button
            className="btn-menu"
            type="button"
        >
            Close menu
        </button>
    </div>

export default List;


