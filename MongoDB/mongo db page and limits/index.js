import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://localhost:27017/shopDB").then(() => {
  console.log("MongDB connected successfully");
});
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 2;
  const skip = (page - 1) * limit;
  const products = await product
    .find({}, { name: 1, _id: 0 })
    .sort({ price: -1 })
    .skip(skip)
    .limit(limit);
  res.json({
    page,
    date: products,
  });
});

app.get("/sorted", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const products = await product.find().sort({ price: -1 });
  res.json({
    page,
    data: products,
  });
});
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
