import * as React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigateTab(name, params) {
    if (navigationRef.isReady()) {
        if (navigationRef.getCurrentRoute().name === name)
            return;
        navigationRef.reset({
            index: 0,
            routes: [{name, params}],
        });

    }
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        if (navigationRef.getCurrentRoute().name === name)
            return;
        navigationRef.navigate({name, params});

    }
}