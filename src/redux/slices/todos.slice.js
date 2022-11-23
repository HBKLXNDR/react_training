import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {todosService} from "../../services/todos.service";

const initialState = {
    todos: [],
    currentTodoWithoutRequest: null,
    error: null,
    loading: false,
    todoWithApiRequest: null
}

const getAll = createAsyncThunk("todoSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await todosService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const getTodoById = createAsyncThunk("todoSlice/getTodoById",
    async ({id},{rejectWithValue})=>{
    try {
        const {data} = await todosService.getById(id)
        return data
    }catch (e) {
        return rejectWithValue(e.response.data)
    }
})

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        deleteById: (state, action) => {
            const index = state.todos.findIndex(el => el.id === action.payload);
            state.todos.splice(index, 1);
        },
        getCurrentTodoWithoutRequest: (state, action) => {
            state.currentTodoWithoutRequest = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.todos = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending,(state, action)=>{
                state.loading = true
            })
            .addCase(getTodoById.fulfilled,(state, action)=>{
                state.todoWithApiRequest = action.payload
                state.loading = false
            })
            .addCase(getTodoById.rejected,(state, action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getTodoById.pending,(state, action)=>{
                state.loading = true
            })
});

const {reducer: todoReducer, actions: {deleteById, getCurrentTodoWithoutRequest}} = todoSlice;

const todoActions = {
    deleteById,
    getCurrentTodoWithoutRequest,
    getAll,
    getTodoById
}

export {todoActions, todoReducer}
