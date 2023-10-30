import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
                    {
                        name:"cart",
                        initialState:{
                            items:[],
                        },
                        reducers:{
                            addItem:(state,action)=>{
                                console.log(action);
                                state.items.push(action.payload);
                            },
                            removeItem:(state,action)=>{
                                state.items.pop();
                            },
                            cleanCart:(state,action)=>{
                                return {items:[]};
                            }
                        },

                    }
                );


export const {addItem,removeItem,cleanCart}=cartSlice.actions;

export default cartSlice.reducer;