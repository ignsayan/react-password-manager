import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPasswords = createAsyncThunk(
    'passwords/fetch',
    async () => {

        const id = localStorage.getItem('USER');

        const endpoint = `${import.meta.env.VITE_API_URL}/passwords/${id}`
        const response = await axios.get(endpoint)
        return response.data
    });