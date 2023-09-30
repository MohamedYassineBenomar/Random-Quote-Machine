import { createSlice } from "@reduxjs/toolkit";

const quotegeneratorslice = createSlice({
    name: "quotes",
    initialState: {
        currentquote: 'The only way to do great work is to love what you do.',
        currentteller: '- Steve Jobs',
        quotesArray: [
            ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "- Nelson Mandela"],
            ["The way to get started is to quit talking and begin doing.", "- Walt Disney"],
            ["Life is what happens when you're busy making other plans.", "- John Lennon"],
            ["The future belongs to those who believe in the beauty of their dreams.", "- Eleanor Roosevelt"],
            ["The only way to do great work is to love what you do.", "- Steve Jobs"]
        ]
    },
    reducers: {
        newquote: state => {
            function getRandomIndex(arr) {
                return Math.floor(Math.random() * arr.length);
            }
            let index = getRandomIndex(state.quotesArray);
            let generatedquote = state.quotesArray[index][0];
            let teller = state.quotesArray[index][1];
            while (generatedquote === state.currentquote) {
                index = getRandomIndex(state.quotesArray);
                generatedquote = state.quotesArray[index][0];
                teller = state.quotesArray[index][1];
            }
            state.currentquote = generatedquote;
            state.currentteller = teller;
        }
    }       
});

export const { newquote } = quotegeneratorslice.actions;

export default quotegeneratorslice.reducer;
