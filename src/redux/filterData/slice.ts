import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterDataSliceState } from "./types";
import {
  fetchAllUniversities,
  fetchAllFaculties,
  fetchAllDepartments,
  fetchAllFlows,
  fetchAllGroups,
} from "./asyncActions";

const initialState: FilterDataSliceState = {
  universitiesData: {
    universities: [],
    total_records: 0,
    total_pages: 0,
  },
  facultiesData: {
    faculties: [],
    total_records: 0,
    total_pages: 0,
  },
  departmentsData: {
    departments: [],
    total_records: 0,
    total_pages: 0,
  },
  flowsData: {
    flows: [],
    total_records: 0,
    total_pages: 0,
  },
  groupsData: {
    groups: [],
    total_records: 0,
    total_pages: 0,
  },
};

const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {},

  extraReducers(builder) {
    // Универы
    builder.addCase(fetchAllUniversities.pending, (state) => {
      state.universitiesData = initialState.universitiesData;
    });
    builder.addCase(fetchAllUniversities.fulfilled, (state, action) => {
      state.universitiesData = action.payload;
    });
    builder.addCase(fetchAllUniversities.rejected, (state) => {
      state.universitiesData = initialState.universitiesData;
    });

    // Факультеты
    builder.addCase(fetchAllFaculties.pending, (state) => {
      state.facultiesData = initialState.facultiesData;
    });
    builder.addCase(fetchAllFaculties.fulfilled, (state, action) => {
      state.facultiesData = action.payload;
    });
    builder.addCase(fetchAllFaculties.rejected, (state) => {
      state.facultiesData = initialState.facultiesData;
    });

    // Кафедры
    builder.addCase(fetchAllDepartments.pending, (state) => {
      state.departmentsData = initialState.departmentsData;
    });
    builder.addCase(fetchAllDepartments.fulfilled, (state, action) => {
      state.departmentsData = action.payload;
    });
    builder.addCase(fetchAllDepartments.rejected, (state) => {
      state.departmentsData = initialState.departmentsData;
    });

    // Потоки
    builder.addCase(fetchAllFlows.pending, (state) => {
      state.flowsData = initialState.flowsData;
    });
    builder.addCase(fetchAllFlows.fulfilled, (state, action) => {
      state.flowsData = action.payload;
    });
    builder.addCase(fetchAllFlows.rejected, (state) => {
      state.flowsData = initialState.flowsData;
    });

    // Группы
    builder.addCase(fetchAllGroups.pending, (state) => {
      state.groupsData = initialState.groupsData;
    });
    builder.addCase(fetchAllGroups.fulfilled, (state, action) => {
      state.groupsData = action.payload;
    });
    builder.addCase(fetchAllGroups.rejected, (state) => {
      state.groupsData = initialState.groupsData;
    });
  },
});

export const {} = filterDataSlice.actions;

export default filterDataSlice.reducer;
