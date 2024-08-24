
const router = require('express').Router();

const multer = require('multer');
const BookController = require('../controllers/bookController');

const upload = multer({ dest: 'uploads/' });

// Define routes
router.post('/upload', upload.single('file'), BookController.uploadFile);
router.get('/books', BookController.getBooks);

module.exports = router;
