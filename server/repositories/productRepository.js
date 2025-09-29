import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

export const productRepository = {
  async findAll(query = {}, limit = 10) {
    const collection = db.collection("products");
    return await collection.find(query).limit(limit).toArray();
  },

  async findById(id) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.findOne({ _id: productId });
  },

  async create(productData) {
    const collection = db.collection("products");
    return await collection.insertOne(productData);
  },

  async update(id, productData) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.updateOne({ _id: productId }, { $set: productData });
  },

  async delete(id) {
    const collection = db.collection("products");
    const productId = new ObjectId(id);
    return await collection.deleteOne({ _id: productId });
  }
};