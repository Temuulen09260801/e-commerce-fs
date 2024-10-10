import { model, Schema } from "mongoose";
interface ICart {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId; quantity: number }];
  totalAmount: number;
}

const cartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Cart = model<ICart>("cart", cartSchema);

export default Cart;
