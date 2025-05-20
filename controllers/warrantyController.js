
const postWarranty = async (req, res) => {
    res.message("Warranty request received");
}

const getWarrantyStatus = async (req, res) => {
    res.message("Warranty status retrieved");
}

module.exports = {
    postWarranty,
    getWarrantyStatus
}