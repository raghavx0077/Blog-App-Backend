const User =require('../models/User')

//Create a user 
exports.createUser= async (req , res)=>{
    console.log(req.body);

try{
    const user=new User(req.body);
    await user.save();

    return res.status(200).send(user).json("");
}
catch(err){
    return res.status(500).send (err.message)
}

}

//Read all users by without using id 
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
};


//Read one user by Id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
       
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).send(err.message);
    }
};



//update operation by using Id
exports.updateUser=async(req,res)=>{
    
    try{
    const userId=req.params.id;
    const updateData=req.body;

    const user = await User.findByIdAndUpdate(userId,updateData,{new:true,runValidators:true});
    if (!user) {
        return res.status(404).send('User not found');
    }

    return res.status(200).json(user);
} catch (err) {
    return res.status(500).send(err.message);
}
};


//Delete operation by using Id
exports.deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from the request parameters

        // Find the user by ID and delete it
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        return res.status(200).send('User deleted successfully');
    } catch (err) {
        return res.status(500).send(err.message);
    }
};






