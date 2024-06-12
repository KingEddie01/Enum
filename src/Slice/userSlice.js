import { createSlice } from '@reduxjs/toolkit';
import Cohorts from '../Components/CohortList';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: Cohorts 
    },
    reducers: {
        
    },
});

export const { createCohort } = userSlice.actions;
export default userSlice.reducer;
