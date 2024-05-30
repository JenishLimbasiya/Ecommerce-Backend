import mongoose from "mongoose";
import constant from "../common/config/constant";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },

  role: {
    type: String,
    enum: [constant.ROLES.ADMIN, constant.ROLES.USER],
    default: constant.ROLES.USER,
  },
  status: {
    type: String,
    enum: [
      constant.STATUS.ACTIVE,
      constant.STATUS.INACTIVE,
      constant.STATUS.DELETE,
    ],
    default: constant.STATUS.ACTIVE,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
