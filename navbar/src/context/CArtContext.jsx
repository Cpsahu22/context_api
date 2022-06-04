
import React, { createContext, useContext, useState} from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
    const {isAuthorized} = useContext(AuthContext)
    const [count, setCount] = useState(0);

    const addtocart = () =>{
        setCount(count+1);
    };


    const buy = () =>{
        if(isAuthorized){
            console.log("can buy");
        } else {
            console.log("cannot buy without logged in ")
        }
        // check if user is logged in 
        // if user is logged in then allow to pay and buy
    }

    return <CartContext.Provider value={{count, addtocart,buy}} >{children}</CartContext.Provider>
};