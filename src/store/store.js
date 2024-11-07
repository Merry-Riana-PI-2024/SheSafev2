import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import categoriesSlice from "../features/categoriesSlice";
import communitySlice from "../features/communitySlice";
import commentarSlice from "../features/commentarSlice";
import casesSlice from "../features/casesSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    categories: categoriesSlice,
    communities: communitySlice,
    commentars: commentarSlice,
    cases: casesSlice,
  },
});

export default store;
