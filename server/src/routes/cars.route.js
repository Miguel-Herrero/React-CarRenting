import Express from "express";
import carController from "../controllers/cars.controller"
const router = Express.Router()

router.get('/from/:from/to/:to', (req, res) => {
    carController.getAllAvailable(req, res);
});

router.get('/', (req, res) => {
    carController.getAll(req, res);
});

export default router;