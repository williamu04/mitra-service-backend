const getUser = async (req, res) => {
    res.status(200).json({
        message: "User details",
        data: {
            userId: 1,
            name: "Ivan",
            email: "ivan@mitra.com",
        }
    });
}

const updateUser = async (req, res) => {
    res.status(200).json({
        message: "User updated",
    });
}

module.exports = {
    getUser,
    updateUser
}