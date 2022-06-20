const verifyCode = async (code) => {
    return await window.confirmationResult
        .confirm(code)
        .then((result) => {
            return result.user;
        })
        .catch((error) => {
            throw Error(error);
        });
};

export default verifyCode;
