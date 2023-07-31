import Router from "express-promise-router";
import {
  signup,
  signin,
  signout,
  profile,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";
import { validateSchema } from "../middleware/validate.middleware.js";
import { signupSchema, signinSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);

router.post("/signin", validateSchema(signinSchema), signin);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;
