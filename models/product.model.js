import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  whatinbox: {
    type: String,
  },
  img: {
    type: String,
    require: true,
  },
  video: {
    type: String,
  },
  wholesalePrice: {
    type: String,
  },
  wholesaleMinimumQuantity: {
    type: Number,
  },
  categories: {
    type: Array,
  },
  concern: {
    type: Array,
  },
  brand: {
    type: String,
  },
  skintypes: {
    type: Array,
  },
  originalPrice: {
    type: Number,
  },
  discoutedPrice: {
    type: Number,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  ratings: [
    {
      star: { type: String },
      naem: { type: String },
      comment: { type: String },
      postedBy: { type: String },
    },
  ],
});

productSchema.index({ "$**": "text" });

const Product = mongoose.model("Product", productSchema);
export default Product;
