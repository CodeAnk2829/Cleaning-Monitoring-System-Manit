const zod = require("zod");

exports.userValidationSchema = zod.object({
    username: zod.string().length(10, { message: "Invalid mobile number" }),
    name: zod.string(),
    gender: zod.string().length(1),
    password: zod.string().min(5, { message: "Password is too short" }),
    confirmPassword: zod.string().min(5, { message: "Password is too short" })
});

