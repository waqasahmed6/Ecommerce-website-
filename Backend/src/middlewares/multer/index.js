import multer from "multer";

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: async (req, file, cb) => {
       return cb(null,file.fieldname+"-"+Date.now()+"-"+file.originalname);
    }
    
});

const upload = multer({
  storage
});

export default upload
