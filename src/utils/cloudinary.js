import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
 
      // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });


const uploadOnCloudinary = async (localfilepath)=>{
      try {
        if(!localfilepath) return null;
        // uplode on cloudinary
        const response = await  cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto",
            // uplode sucess on cloudinary
        })
        console.log(`${response.url} file uplode on clou`);
        return response.url;
        
      } catch (error) {
        fs.unlinkSync(localfilepath); // remove file from owen server 
        return null;
      
      }
}


export {uploadOnCloudinary}