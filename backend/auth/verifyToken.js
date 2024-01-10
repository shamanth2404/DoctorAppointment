import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const authenticate = (req,res,next) => {
    //get token from headers
    const authToken = req.headers.authorization;
    
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({status:false,message:"No Token, Authorization Denied"});
    }

    try {
        const token = authToken.split(' ')[1];

        //verify
        const decoded = jwt.verify(token,process.env.JWT_SECRET_key);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({message:"token is Expired"});
        }
        return res.status(401).json({message:"Invalid Token"});
    }
}

export const restrict = roles => async(req,res,next) => {
    const {userId} = req.userId;

    let user;

    const patient = await User.findOne({userId});
    const doctor = await Doctor.findOne({userId});

    if(patient){
        user = patient;
    }
    if(doctor){
        user = doctor;
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false,message:"You are not authorized"});
    }
    next();
}