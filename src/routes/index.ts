import express, { Request, Response } from "express";
import authRoutes from "./auth";
import carsRoutes from "./cars";
import usersRoutes from "./users";
import orderRoutes from "./orders";
import itemsRoutes from "./items";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

router.use("/auth", authRoutes);
router.use("/cars", carsRoutes);
router.use("/users", usersRoutes);
router.use("/orders", orderRoutes);
router.use("/items", itemsRoutes);

export default router;
