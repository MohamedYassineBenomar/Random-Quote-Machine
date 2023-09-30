import { configureStore } from "@reduxjs/toolkit";
import quotegeneratorslice from "./slices/quotegeneratorslice";

const store = configureStore({
    reducer: {
        quotes: quotegeneratorslice
    }
});

export default store;
