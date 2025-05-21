
const postReview = async (req, res) => {
    res.status(200).json({
        message: "Review posted successfully",
    });
}

const getReviews = async (req, res) => {
    const repairId = req.params.repairId;
    res.status(200).json({
        message: "Reviews retrieved successfully",
        data: {
            repairId: repairId,
            rating: 4.5,
            comment: "Jos!",
        }
    });
}

module.exports = {
    postReview,
    getReviews
}