import { gettodos } from '@/utiles/database-FN'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Name {
    firstName: string;
    lastName: string;
  }
  
  // Define an initial state for the object
  const initialState: Name = {
    firstName: 'a',
    lastName: 'b',
  };

/* export async function getinitialtodolist() {
    const tototo=await gettodos()
    const arrayLength: number = tototo.length;
    return {
        props:{
            value: arrayLength
        }
    }
    
} */

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    updateFirstName: (state) => {
        state.firstName =+ state.firstName+'hallooooooo';
      },
      updateLastName: (state, action: PayloadAction<string>) => {
        state.lastName = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { updateFirstName, updateLastName } = nameSlice.actions

export default nameSlice.reducer