
const postRepair = async (req, res) => {
    res.message("Repair request received");
}

const getRepairStatus = async (req, res) => {
    res.message("Repair status retrieved");
}

const getRepairHistory = async (req, res) => {
    res.message("Repair history retrieved");
}

module.exports = {
    postRepair,
    getRepairStatus,
    getRepairHistory
}