const mongoose = require("mongoose");
const { schema } = require("./url");
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);

const User = mongoose.model("users", userSchema);
module.exports = User;