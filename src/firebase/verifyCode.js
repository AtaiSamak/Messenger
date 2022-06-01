const verifyCode = async (code) => {
    return await window.confirmationResult
        .confirm(code)
        .then((result) => {
            return result.user;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};

export default verifyCode;
