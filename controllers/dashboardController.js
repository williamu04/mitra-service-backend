const getStats = async (req, res) => {
    res.status(200).json({
        message: "Dashboard stats",
        data: {
            totalRequest: 100,
            pendingRequest: 50,
            completedRequest: 50,
        }
    });
}

const getUnpaid = async (req, res) => {
    res.status(200).json({
        message: "Unpaid orders",
        data: [
            { 
                orderId: 1, 
                userId: 1,
                userName: "Ivan",
                amount: 100 
            },
        ]
    });
}

const getRatings = async (req, res) => {
    res.status(200).json({
        message: "Ratings",
        data: [
            { 
                userId: 1, 
                rating: 5,
                comment: "Great service!"
            },
        ]
    });
}

const getNotifications = async (req, res) => {
    res.status(200).json({
        message: "Notifications",
        data: [
            { notificationId: 1, message: "New order placed" },
        ]
    });
}

module.exports = {
    getStats,
    getUnpaid,
    getRatings,
    getNotifications
}