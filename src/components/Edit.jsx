import React from 'react';
import {Navigation} from './Navigation.jsx';

export const Edit = (props) => {
    return (
        <div>
            <Navigation
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={props.setIsLoggedIn}
                userId={props.userId} />
        </div>
    );
}
