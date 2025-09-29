import express from "express";
import { productController } from "../controllers/productController.js";
import { ProductValidation } from "../middlewares/productValidation.js";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", ProductValidation.validateProduct, productController.createProduct);
router.put("/:id", ProductValidation.validateProduct, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;


//   Products routes
// app.get("/products", async (req, res) => {
//     try {
//         const name = req.query.keywords;
//         const category = req.query.category;
//         const query = {};
//         if (name) {
//             query.name = new RegExp(name, "i");
//         }
//         if (category) {
//             query.category = new RegExp(category, "i");
//         }
//         const collection = db.collection("products");
//         const allProducts = await collection.find(query).limit(10).toArray();
//         return res.json({ data: allProducts });
//     } catch (error) {
//         return res.json({ message: `${error}` });
//     }
// });

// app.get("/products/:id", async (req, res) => {
//     try {
//         const collection = db.collection("products");
//         const productId = new ObjectId(req.params.id);

//         const productById = await collection.findOne({ _id: productId });

//         return res.json({ data: productById });
//     } catch (error) {
//         return res.json({ message: `${error}` });
//     }
// });

// app.post("/products", async (req, res) => {
//     try {
//         const collection = db.collection("products");
//         const productData = { ...req.body, created_at: new Date() };
//         const newProductData = await collection.insertOne(productData);
//         return res.json({
//             message: `Product Id ${newProductData.insertedId} has been created successfully`,
//         });
//     } catch (error) {
//         return res.json({ message: `${error}` });
//     }
// });

// app.put("/products/:id", async (req, res) => {
//     try {
//         const collection = db.collection("products");
//         const newProductData = { ...req.body, modified_at: new Date() };
//         const productId = new ObjectId(req.params.id);

//         await collection.updateOne({ _id: productId }, { $set: newProductData });
//         return res.json({
//             message: `Movie record ${productId} has been updated successfully`,
//         });
//     } catch (error) {
//         return res.json({ message: `${error}` });
//     }
// });

// app.delete("/products/:id", async (req, res) => {
//     try {
//         const collection = db.collection("products");
//         const productId = new ObjectId(req.params.id);

//         await collection.deleteOne({ _id: productId });

//         return res.json({
//             message: `Movie record ${productId} has been deleted successfully`,
//         });
//     } catch (error) {
//         return res.json({ message: `${error}` });
//     }
// });