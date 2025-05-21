
const postPickup = async (req, res) => {
    res.status(200).json({
        message: "Pickup request created",
        data: {
            pickupId: 1,
            status: "Scheduled",
        }
    });
}

const getPickupStatus = async (req, res) => {
    const pickupId = req.params.pickupId;
    res.status(200).json({
        message: "Pickup status",
        data: {
            pickupId: pickupId,
            status: "On the way",
        }
    });
}

module.exports = {
    postPickup,
    getPickupStatus
}