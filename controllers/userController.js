const getUser = async (req, res) => {
    const userId = req.headers("x-clerk-user-id");
    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);

        
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default {
    getUser
}