import Express from "express";
import carController from "../controllers/cars.controller"
const router = Express.Router()

router.get('/', (req, res) => {
    carController.getAll(req, res);
});

export default router;