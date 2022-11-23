import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services/comments.service";

const initialState = {
    comments: [],
    error: null,
    loading: false
}

const getAll = createAsyncThunk(
    "commentSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await commentsService.getAll();
            return data
        } catch (e) {
           return rejectWithValue(e.response.data)
        }
    });


const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {
        deleteById:(state, action)=>{
            const index = state.comments.findIndex(el=>el.id === action.payload);
            state.comments.splice(index,1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.comments = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })

});

const {reducer: commentReducer, actions: {deleteById}} = commentSlice;

const commentActions = {
    getAll,
    deleteById
}

export {commentActions, commentReducer}