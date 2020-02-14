import {createContext} from "react";

export const ProductsContext = createContext({
    itemsSelectedAdd: [],
    itemsSelectedDel: [],
    handleItemSelect: () => {}
});