
const postPayment = async (req, res) => {
    res.status(200).json({
        message: "Payment processed",
        data: {
            paymentUrl: "https://paymentgateway.com/transaction/123456",
        }
    });
}

const getPaymentStatus = async (req, res) => {
    const paymentId  = req.params;
    res.status(200).json({
        message: "Payment status",
        data: {
            paymentId: paymentId,
            status: "Paid",
        }
    });
}

module.exports = {
    postPayment,
    getPaymentStatus
}