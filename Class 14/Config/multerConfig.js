const multer = require("multer")
const path = require("path")
const crypto = require("crypto")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/images/Uploads')
    },
    filename: function (req, file, cb) {
        const name = crypto.randomBytes(16).toString('hex')
        const fn = name + path.extname(file.originalname)
        cb(null, fn)
    }
})

const upload = multer({ storage: storage })


module.exports = upload