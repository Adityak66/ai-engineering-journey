// ============================================================================
// src/storage.js — LocalStorage Persistence Layer
// ============================================================================

const STORAGE_KEY = "employee_app_v2";

/**
 * Persists employees array to localStorage as a JSON string.
 */
export function saveEmployees(employees) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    } catch (error) {
        console.error("Failed to save to localStorage:", error);
    }
}

/**
 * Retrieves and parses employees from localStorage.
 * Uses nullish coalescing to fall back to an empty array.
 */
export function loadEmployees() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        console.error("Failed to load from localStorage, returning empty array:", error);
        return [];
    }
}

/**
 * Clears saved employee data.
 */
export function clearEmployees() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Failed to clear localStorage:", error);
    }
}
