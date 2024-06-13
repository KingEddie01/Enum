import { createSlice } from '@reduxjs/toolkit';
import initialCohorts from '../Components/CohortList'; 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    cohorts: initialCohorts 
  },
  reducers: {
    createCohort: (state, action) => {
      state.cohorts.push(action.payload);
    },
    updateCohort: (state, action) => {
      const { index, updatedCohort } = action.payload;
      state.cohorts[index] = updatedCohort;
    },
    deleteCohort: (state, action) => {
      state.cohorts.splice(action.payload, 1);
    }
  },
});

export const { createCohort, updateCohort, deleteCohort } = userSlice.actions;
export default userSlice.reducer;
