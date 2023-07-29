import { Router } from "express";

const router = Router();

router.post('/signup', (req, res) => res.send('Signup Form'))

router.post('/signin', (req, res) => res.send('Signin Form'))

router.post('/signout', (req, res) => res.send('Signout'))

router.get('/profile', (req, res) => res.send('Profile'))

export default router;