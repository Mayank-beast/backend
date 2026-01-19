import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'get Movies endpoint' });
});
router.post('/', (req, res) => {
    res.json({ message: 'post Movies endpoint' });
});
router.delete('/', (req, res) => {
    res.json({ message: 'delete Movies endpoint' });
});
router.put('/', (req, res) => {
    res.json({ message: 'put Movies endpoint' });
});

export default router; 