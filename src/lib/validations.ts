import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(2, "Tên tối thiểu 2 ký tự")
            .max(50, "Tên tối đa 50 ký tự")
            .trim(),
        email: z.string().email("Email không hợp lệ").toLowerCase().trim(),
        password: z
            .string()
            .min(6, "Mật khẩu tối thiểu 6 ký tự"),
        //   .regex(/[A-Z]/, "Phải có ít nhất 1 chữ hoa")
        //   .regex(/[0-9]/, "Phải có ít nhất 1 chữ số"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    });

export const loginSchema = z.object({
    email: z.string().email("Email không hợp lệ").toLowerCase().trim(),
    password: z.string().min(1, "Mật khẩu là bắt buộc"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;