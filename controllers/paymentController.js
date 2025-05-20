
const postPayment = async (req, res) => {
    res.message("Payment request received");
}

const getPaymentStatus = async (req, res) => {
    res.message("Payment status retrieved");
}

module.exports = {
    postPayment,
    getPaymentStatus
}