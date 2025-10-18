import express from 'express'
import express from "express";
import { getAssets, createAsset, updateAsset, deleteAsset } from "../controllers/assetController.js";

const router = express.Router();

router.get("/getassets",  getAssets);
router.post("/",  adminOnly, createAsset);
router.put("/:id", adminOnly, updateAsset);
router.delete("/:id",  adminOnly, deleteAsset);

export default router;
