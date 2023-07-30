import Router from "express-promise-router";
import {
  signup,
  signin,
  signout,
  profile,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/signout", signout);

router.get("/profile",isAuth, profile);

export default router;
