
const postReview = async (req, res) => {
    res.message("Review submitted successfully");
}

const getReviews = async (req, res) => {
    res.message("Reviews retrieved successfully");
}

module.exports = {
    postReview,
    getReviews
}