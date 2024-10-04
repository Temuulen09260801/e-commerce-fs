import { model, Schema } from "mongoose";

interface ISaved {
  _id: Schema.Types.ObjectId;
  product: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const savedSchema = new Schema<ISaved>(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Saved = model<ISaved>("Saved", savedSchema);

export default Saved;
