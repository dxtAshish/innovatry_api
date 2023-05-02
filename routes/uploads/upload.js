const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "disgyayfg",
  api_key: "753641217287498",
  api_secret: "BPDFKWElRk2I7Sgc7kjKp0KyTaE",
  secure: true,
});
const uploadImage = async (request, response) => {
  console.log(10)
  const files = request.files.photo;
  if (typeof files.length === "undefined") {
    // Upload the image
    console.log("here single file");
    const result = await cloudinary.uploader.upload(
      files.tempFilePath,
      {
        transformation: [
          { width: 600, crop: "scale" },
          { quality: "auto", fetch_format: "auto" },
        ],
      },
      (err, result) => {}
    );
    response.json(result);
  }
  if (typeof files.length !== "undefined") {
    let images = [];
    Promise.all(
      files.map(async (file) => {
        const result = await cloudinary.uploader.upload(
          file.tempFilePath,
          {
            transformation: [
              { width: 600, crop: "scale" },
              { quality: "auto", fetch_format: "auto" },
            ],
          },
          (err, result) => {}
        );

        return result;
      })
    ).then((result) => {
      // images.push(result.map((data)=>{return data.secure_url}))
      response.json({ data: result });
    });
  }
};

module.exports = uploadImage;
