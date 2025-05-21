
const postRepair = async (req, res) => {
    res.status(200).json({
        message: "Repair request created",
        data: {
            repairId: 1,
            status: "Pending",
        }
    });
}

const getRepairStatus = async (req, res) => {
    res.status(200).json({
        message: "Repair status",
        data: {
            repairId: 1,
            status: "In Progress",
            estimatedCompletion: new Date(Date.now() + 7200000), // 2 hours later
        }
    });
}

const getRepairHistory = async (req, res) => {
    res.status(200).json({
        message: "Repair history",
        data: [
            {
                repairId: 1,
                status: "Completed",
                completionTime: new Date(Date.now() - 86400000), // 1 day ago
            },
            {
                repairId: 2,
                status: "Completed",
                completionTime: new Date(Date.now() - 3600000), // 1 hour ago
            },
        ]
    });
}

module.exports = {
    postRepair,
    getRepairStatus,
    getRepairHistory
}