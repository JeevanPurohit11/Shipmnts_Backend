
const router = require('express').Router();

const multer = require('multer');
const BookController = require('../controllers/bookController');

const upload = multer({ dest: 'uploads/' });

// Define routes
// router.post('/upload', upload.single('file'), BookController.uploadFile);
router.post('/upload', cors(corsOptions), (req, res) => {
    // Handle the file upload
    res.send({ message: 'File uploaded successfully!' });
  });
  
  app.use(router);
router.get('/books', BookController.getBooks);

module.exports = router;
