import React, { createContext } from 'react'

export const CartContext = createContext({
    countItems: 0,
    items: [],
    setItemsValue: (items) => {
        this.items = items;
        this.countItems = items.length;
    }
});
