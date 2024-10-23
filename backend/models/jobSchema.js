import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must contain atleast 3 characters"],
        maxLength: [50, "Job title cannot exceed 50 characters"],
    },
    description: {
        type: String,
        reqired: [true, "Please provide Job description"],
        minLength: [3, "Job description must contain atleast 3 characters"],
        maxLength: [50, "Job description cannot exceed 50 characters"],
    },
    category: {
        type: String,
        required: [true, "Job category is required"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
    },
    location: {
        type: String,
        required: [true, "Please provide exact location"],
        minLength: [20 , "Location must contain atleast 20 characters"],
    },
    fixedSalary: {
        type: Number,
        minLength: 4,
        maxLength: 9,
    },
    salaryFrom: {
        type: Number,
        minLength: 4,
        maxLength: 9,
    },
    salaryTo: {
        type: Number,
        minLength: 4,
        maxLength: 9,
    },
    expired: {
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);