/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../../config";

const UserSchema = new Schema<IUser, UserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bookStatus: {
      bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        unique: true,
      },
      status: {
        type: String,
        validate: {
          validator: function (value: string) {
            return [
              "Buying soon",
              "Reading",
              "Reading soon",
              "Finished",
            ].includes(value);
          },
          message: "Invalid status value",
        },
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

export const User = model<IUser, UserModel>("User", UserSchema);
