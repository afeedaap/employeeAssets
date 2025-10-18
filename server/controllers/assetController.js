import Asset from "../models/Asset.js";

export const getAssets = async (req, res) => {
  const assets = await Asset.find().populate("assignedTo", "name email");
  res.json(assets);
};

export const createAsset = async (req, res) => {
  const asset = new Asset(req.body);
  const savedAsset = await asset.save();
  res.status(201).json(savedAsset);
};

export const updateAsset = async (req, res) => {
  const updated = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteAsset = async (req, res) => {
  await Asset.findByIdAndDelete(req.params.id);
  res.json({ message: "Asset deleted" });
};
