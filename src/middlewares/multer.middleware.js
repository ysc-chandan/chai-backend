import multer from "multer";

const storage = multer.diskStorage({
<<<<<<< HEAD
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})
=======
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ 
    storage,
 });


>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
