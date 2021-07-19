import React from 'react';

import SettingIcon from '../../assets/icons/Setting.svg';
import './ui.css';

const SettingsButton = props => {
    return (
        <div className="flex-center square icon-button" onClick={props.onOpenSettings}>
            <img src={SettingIcon} alt="settings" />
        </div>
    );
};

export default SettingsButton;