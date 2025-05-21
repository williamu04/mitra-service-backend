
const postWarranty = async (req, res) => {
    res.status(200).json({
        message: "Warranty claim submitted",
    });
}

const getWarrantyStatus = async (req, res) => {
    const warrantyId = req.params.warrantyId;
    res.status(200).json({
        message: "Warranty status",
        data: {
            warrantyId: warrantyId,
            status: "Approved",
        }
    });
}

module.exports = {
    postWarranty,
    getWarrantyStatus
}