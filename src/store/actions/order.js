import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Synchronous action creator
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

// Synchronous action creator
export const purchaseBurgerFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

// Asynchronous action creator
export const purchaseBurgerStart = ( orderData ) => {
    return dispatch => {
        axios.post( '/orders.json', orderData )
            .then( response => {
                console.log( response.data );
                dispatch(purchaseBurgerSuccess( response.data, orderData ));
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail( error ));
            } );
        
    };
};