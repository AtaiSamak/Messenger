const getActiveFriend = (friends, phoneNumber) => {
    return friends.find((friend) => friend.phoneNumber === phoneNumber);
};

export default getActiveFriend;
