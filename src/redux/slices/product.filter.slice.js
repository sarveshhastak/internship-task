import { createSlice } from "@reduxjs/toolkit";
const productFilterSlice = createSlice({
    name: "productFilterSlice",
    initialState: {
        material: [],
        ringSize: [],
        priceRange: [],
        discount: [],
        shopFor: [],
        sortBy: ""
    },
    reducers: {
        toggleFilter: (state, action) => {
            const { field, value } = action.payload;
            const val = field === "ringSize" ? +value : value;
            if (state[field].includes(val)) {
                state[field] = state[field].filter(item => item !== val);
            } else {
                state[field].push(val);
            }
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },

    },
})

export const { toggleFilter, setSortBy } = productFilterSlice.actions
export default productFilterSlice.reducer