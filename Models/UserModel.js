const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
