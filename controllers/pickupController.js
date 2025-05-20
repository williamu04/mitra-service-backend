
const postPickup = async (req, res) => {
    res.message("Pickup request received");
}

const getPickupStatus = async (req, res) => {
    res.message("Pickup status retrieved");
}

module.exports = {
    postPickup,
    getPickupStatus
}