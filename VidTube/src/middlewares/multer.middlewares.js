import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const nameArray = file.originalname.split("\\.")
    let name, ext;
    if (nameArray.length === 1){
        name = nameArray[0]
        ext = ""
    } else {
        name = nameArray[0]
        ext = nameArray[1]
    }
    cb(null, name + '-' + uniqueSuffix + ext)
  }
})

export const upload = multer({ storage })