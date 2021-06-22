import React from 'react';

import UserIcon from '../../assets/icons/user.svg';
import './ui.css';

const User = props => {
    return (
        <div className="border-purple user flex-center" onClick={props.showUser}>
            <img src={UserIcon} alt="logo" />
        </div>
    );
};

export default User;