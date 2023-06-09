const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/users');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_user${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage: storage });

module.exports = uploadFile;

