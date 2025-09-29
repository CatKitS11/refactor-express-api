import { productRepository } from "../repositories/productRepository.js";

export const productService = {
  async getAllProducts(keywords, category) {
    const query = {};
    if (keywords) {
      query.name = new RegExp(keywords, "i");
    }
    if (category) {
      query.category = new RegExp(category, "i");
    }
    return await productRepository.findAll(query);
  },

  async getProductById(id) {
    return await productRepository.findById(id);
  },

  async createProduct(productData) {
    const newProductData = { ...productData, created_at: new Date() };
    return await productRepository.create(newProductData);
  },

  async updateProduct(id, productData) {
    const newProductData = { ...productData, modified_at: new Date() };
    return await productRepository.update(id, newProductData);
  },

  async deleteProduct(id) {
    return await productRepository.delete(id);
  }
};