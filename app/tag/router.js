const router = require('express').Router();



router.get('/tags', categoryController.index);
router.post('/tags', categoryController.store);
router.put('/tags/:id', categoryController.update);
router.delete('/tags/:id', categoryController.destroy);

module.exports = router;