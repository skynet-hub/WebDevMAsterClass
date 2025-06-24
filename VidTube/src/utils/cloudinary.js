import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(`File uploaded on cloudinary. File src: ${response.url}`);
        
        
        fs.unlink(localFilePath)
        return response 
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null        
    }
}

export {uploadOnCloudinary}