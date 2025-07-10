// src/api/index.js
// Bertindak sebagai pengendali API yang bisa beralih sumber data

import axios from 'axios';
import { educationHistory, skills, projects } from './localData.js';

// --- SAKLAR UTAMA ---
// true = menggunakan data lokal dari file di atas
// false = menggunakan API backend asli
const USE_LOCAL_API = true;
// --------------------

const API_BASE_URL = 'http://localhost:3000/api';

const getLocalData = (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data });
        }, 300);
    });
};

export const getEducationData = () => {
    if (USE_LOCAL_API) {
        return getLocalData(educationHistory);
    }
    return axios.get(`${API_BASE_URL}/education`);
};

export const getSkillsData = () => {
    if (USE_LOCAL_API) {
        return getLocalData(skills);
    }
    return axios.get(`${API_BASE_URL}/skills`);
};

export const getProjectsData = () => {
    if (USE_LOCAL_API) {
        return getLocalData(projects);
    }
    return axios.get(`${API_BASE_URL}/projects`);
};
