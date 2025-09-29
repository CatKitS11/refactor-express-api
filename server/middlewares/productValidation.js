export const ProductValidation = {
    validateProduct(req, res, next) {
      const { name, price, image, description, category } = req.body;
      const errors = [];
  
      if (typeof name !== "string" || name.trim() === "") {
        errors.push("name must be a non-empty string");
      }
  
      if (!Number.isFinite(price) || price <= 0) {
        errors.push("price must be a number greater than 0");
      }
  
      if (typeof image !== "string" || image.trim() === "") {
        errors.push("image must be a non-empty string");
      }
  
      if (typeof description !== "string" || description.trim() === "" || description.trim().length < 10) {
        errors.push("description must be a non-empty string with at least 10 characters");
      }
  
      if (typeof category !== "string" || category.trim() === "") {
        errors.push("category must be a non-empty string");
      }
  
      if (errors.length) {
        return res.status(400).json({ errors });
      }
      next();
    }
  };