const getStats = async (req, res) => {
    res.message("Hello from the dashboard controller")
}

const getUnpaid = async (req, res) => {
    res.message("Unpaid invoices")
}

const getRatings = async (req, res) => {
    res.message("Ratings")
}

const getNotifications = async (req, res) => {
    res.message("Notifications")
}

module.exports = {
    getStats,
    getUnpaid,
    getRatings,
    getNotifications
}