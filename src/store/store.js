import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import categoriesSlice from "../features/categoriesSlice";
import communitySlice from "../features/communitySlice";
import commentarSlice from "../features/commentarSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    categories: categoriesSlice,
    communities: communitySlice,
    commentars: commentarSlice,
  },
});

export default store;
