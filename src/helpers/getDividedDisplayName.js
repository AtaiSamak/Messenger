const getDividedDisplayName = (displayName) => {
    const firstName = displayName.split(" ")[0] || "";
    const lastName = displayName.split(" ")[1] || "";
    return [firstName, lastName];
};

export default getDividedDisplayName;
