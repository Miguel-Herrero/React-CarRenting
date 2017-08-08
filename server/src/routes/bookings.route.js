import Express from "express";
import bookingsController from "../controllers/bookings.controller"

const router = Express.Router();

router.get('/from/:from/to/:to', (req, res) => {
    bookingsController.getForRange(req, res);
});

router.get('/', (req, res) => {
    bookingsController.getAll(req, res);
});

export default router;