import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

const uploadOnCloudinary = async (
  localFilePath: string
): Promise<UploadApiResponse | null> => {
  if (!localFilePath) {
    console.error("No file path provided.");
    return null;
  }

  try {
    const response: UploadApiResponse = await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type: "auto",
        timeout: 120000,
      }
    );

    console.log(
      "File successfully uploaded to Cloudinary:",
      response.secure_url
    );

    // Delete the local file after a successful upload
    try {
      fs.unlinkSync(localFilePath);
      console.log("Local file deleted:", path.basename(localFilePath));
    } catch (unlinkError) {
      console.error("Error deleting local file:", unlinkError);
    }

    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);

    try {
      fs.unlinkSync(localFilePath);
      console.log("Local file deleted:", path.basename(localFilePath));
    } catch (unlinkError) {
      console.error("Error deleting local file:", unlinkError);
    }

    return null;
  }
};

export { uploadOnCloudinary };
