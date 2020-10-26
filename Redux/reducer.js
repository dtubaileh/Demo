import React from 'react';

const initializeState = [{id:1,title:"First",description:"Redux state description"},{id:2,title:"Second",description:"Redux state description"},{id:3,title:"Third",description:"Redux state description"}];

export const reducer  = (state = initializeState,action)=>{
switch(action.type){
case "Add":
    return [...state,action.payload];

case "Delete" :
       return state.map(obj=>{
            obj.id !== action.payload.id
        });
default:return state;
}

};