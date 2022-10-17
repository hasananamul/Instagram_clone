import express from "express";
import {createUser, deleteUser, editUser, getAllUser, getSingleUser, authLoggedInUser,verifyAccount, recoveryAccount, recoveryPassword} from "../controllers/userControllers.js";
import {adminMiddleware} from "../middleware/adminMiddleware.js";
import {userMiddleware} from "../middleware/userMiddleware.js";

const router = express.Router();

//Routing all controllers
router.route("/").get( adminMiddleware, getAllUser).post(userMiddleware, createUser);
router.route("/me").get(authLoggedInUser)
router.route("/:id").get(userMiddleware, getSingleUser).put(userMiddleware,editUser).delete(userMiddleware,deleteUser);
router.post("/accountVerify", verifyAccount)
router.post("/recoveryPassword", recoveryPassword)
router.post("/recoveryAccount", recoveryAccount)

export default router