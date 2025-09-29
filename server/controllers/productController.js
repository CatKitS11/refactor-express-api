import { productService } from "../services/productService.js";

export const productController = {
  async getAllProducts(req, res) {
    try {
      const { keywords, category } = req.query;
      const products = await productService.getAllProducts(keywords, category);
      return res.json({ data: products });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  },

  async getProductById(req, res) {
    try {
      const product = await productService.getProductById(req.params.id);
      return res.json({ data: product });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  },

  async createProduct(req, res) {
    try {
      const result = await productService.createProduct(req.body);
      return res.json({
        message: `Product Id ${result.insertedId} has been created successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  },

  async updateProduct(req, res) {
    try {
      await productService.updateProduct(req.params.id, req.body);
      return res.json({
        message: `Product record ${req.params.id} has been updated successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  },

  async deleteProduct(req, res) {
    try {
      await productService.deleteProduct(req.params.id);
      return res.json({
        message: `Product record ${req.params.id} has been deleted successfully`,
      });
    } catch (error) {
      return res.json({ message: `${error}` });
    }
  }
};