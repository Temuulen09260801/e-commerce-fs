import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phoneNumber?: String;
  role: String;
  profile_img: String;
  address: String;
  created_at: Date;
  updated_at: Date;
}

// new gdgiin tsaana baiguulagc function bdg
const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна уу."],
  },
  lastname: {
    type: String,
    required: [true, "Хэрэглэгчийн овгийг заавал оруулна уу."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Хэрэглэгчийн email заавал оруулна уу."],
  },
  password: {
    type: String,
    minlength: [8, "Хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна."],
    required: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна уу."],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1726516335449-eaa942fd4c2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
  address: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
    this.password = hashedPassword;
    next();
  }
});

const User = model("User", userSchema);

export default User;
