import { gettodos } from "@/utiles/database-FN";
import { gettodosAction } from "@/utiles/serveraction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

//const initialState: any =  gettodosAction()
export async function getinitialtodolist() {
    return {
        props:{
            initialtodolist:await gettodos()
        }
    }
    
}


const postsSlice = createSlice({
    name: 'posts',
    initialState: getinitialtodolist(),
    reducers: {
      addPosts: (state, action) => {
        state.push(...action.payload);
      },
      addPost: (state, action: PayloadAction<any>) => {
        const { id, title, description } = action.payload;
        state.push({ id, title, description });
      },
      updatePost: (state, action: PayloadAction<any>) => {
        const { id, title, description } = action.payload;
        const postIndex = state.findIndex((post: any) => post.id === id);
        if (postIndex !== -1) {
          state[postIndex].title = title;
          state[postIndex].description = description;
        }
      },
      deletePost: (state, action: PayloadAction<any>) => {
        const postId = action.payload;
        return state.filter((post: any) => post.id !== postId);
      },
    }
})

export const { addPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;