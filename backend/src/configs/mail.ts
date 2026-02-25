export const sendVerifyEmail = async (email: string, link: string) => {
    console.log('📩 Verify email', link);
};

export const sendResetPasswordEmail = async (email: string, link: string) => {
    console.log('📩 Reset password email', link);
};
