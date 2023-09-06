import { configureStore } from "@reduxjs/toolkit";
import Todos from "./todo";
export const store = configureStore({
    reducer:{
     list:Todos
    }
})