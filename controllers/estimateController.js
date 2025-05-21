const postEstimate = async (req, res) => {
    res.status(200).json({
        message: "Estimate created",
        data: {
            estimateId: 1,
            estimatedCost: 1000,
            estimatedTime: 7200000, // 2 hours in milliseconds
        }
    });
}

module.exports = {
    postEstimate,
}