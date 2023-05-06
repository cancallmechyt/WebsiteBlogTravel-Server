import express from "express";
import { login, register, logout } from "../cons/auth.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router