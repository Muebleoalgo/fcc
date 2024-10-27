import {Router} from 'express'

const router = Router();

router.get('/create-order', (req, res) =>res.send('creating order'));

router.get('/success', (req, res) =>res.send('sucess'));

router.get('/webhook', (req, res) =>res.send('webhook'));

export default router;