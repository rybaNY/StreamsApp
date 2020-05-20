import React from 'react';
import ReactDOM from 'react-dom';
import history from './history'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer visible active modals">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.header}</div>
                <div className="content">
                    <p>{props.content}</p>
                </div>
                <div className="actions">
                    {props.renderActions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;

