import React, {useState, createContext} from 'react';

export const MyContextApp = createContext();

export const MyContextProvider = (props) => {
  const [stateStore, setStateStore] = useState([{id:1,title:"First",description:"Redux state description"},{id:2,title:"Second",description:"Redux state description"},{id:3,title:"Third",description:"Redux state description"}]);
  return (
      
    <MyContextApp.Provider value={[stateStore, setStateStore]}>
      {props.children}
    </MyContextApp.Provider>
  );
};
