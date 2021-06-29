import React from 'react';

import NotificationIcon from '../../assets/icons/bell.svg';
import './ui.css';

const Notification = props => {
    return (
        <div className="notification flex-center" onClick={props.onOpenNotification}>
            <img src={NotificationIcon} alt="notification" />
        </div>
    );
};

export default Notification;