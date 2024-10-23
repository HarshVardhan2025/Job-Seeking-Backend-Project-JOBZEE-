//used to login directly when registered or login correctly
export const sendToken = (user, statusCode, res, message) =>{
    const token = user.getJWTToken();
    //expires is used to set the expiry time for the cookie to be removed
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure : true,
        sameSite: "None",
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
};