import React from 'react';
// import remove from 'lodash.remove';
const initializeState = [{id:1,title:"First",description:"Redux state description"},{id:2,title:"Second",description:"Redux state description"},{id:3,title:"Third",description:"Redux state description"}];

export const reducer  = (state = initializeState,action)=>{
switch(action.type){
case "Add": console.log("add action",action);
    return [...state,action.payload];

case "Delete" :
    const newState = state.filter(val => val.id !== action.payload.id );
        return newState;
    

default:return state;
}

};