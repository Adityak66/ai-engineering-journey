"use strict";
// ==========================================
// 05-type-inference.ts — Automatic Type Inference
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
let city = "Nashik"; // inferred as string
let count = 10; // inferred as number
let isLoggedIn = false; // inferred as boolean
console.log("=== 05-type-inference ===");
console.log("Inferred variables:", city, count, isLoggedIn);
