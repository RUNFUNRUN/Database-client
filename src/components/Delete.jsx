import React from 'react';
import {Navigation} from './Navigation.jsx';

export const Delete = (props) => {
    return (
        <div>
            <Navigation
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={props.setIsLoggedIn}
                userId={props.userId} />
        </div>
    );
}
