import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './authSlice';

//create store
export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})