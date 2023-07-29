import { Router } from "express";
import { signup, signin, signout, profile } from "../controllers/auth.controller.js";

const router = Router();

router.post('/signup', signup)

router.post('/signin', signin)

router.post('/signout', signout)

router.get('/profile', profile)

export default router;