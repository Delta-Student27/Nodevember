import express from "express"
import {getOrderHistory, placeOrder} from "../controllers/order.controller.js"
import {protectRoute ,isAdmin } from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/placeorder" , protectRoute , placeOrder);
router.get('/',protectRoute,getOrderHistory);
export default router;