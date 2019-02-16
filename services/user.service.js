const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateJWT, verifyJWT } = require('./jwt.service')
const { sendEmail } = require('../config/mail');

class UserService {
  static async createUser(newUser) {
    const password = await UserService.generateHashPassword(newUser.password);

    let user;

    if (newUser.password.length >= 8 && newUser.password === newUser.confirmPassword) {
      user = await new User({ ...newUser, password });
    }

    if (!user) {
      throw new Error('User not created.');
    }

    const accessToken = generateJWT(newUser);
    user.save()

    return accessToken;
  }

  static async findUser(id) {
    const user = await User.findById(id);

    if (!user) throw new Error("User doesn't exist");
    return user;
  }

  static async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);

    if (!user) throw new Error("User doesn't exist");

    return user;
  }

  static async updateUser(id, newUser) {
    const { password, ...updatedUser } = newUser;
    const user = await User.findByIdAndUpdate(id, updatedUser);

    if (!user) throw new Error("User doesn't exist");

    return user;
  }

  static async loginUser({ email, password }) {
    const user = await User.findOne({ email });
    const match = await bcrypt.compare(password, user.password)

    if (!match) throw new Error('User doesn\'t exist');

    const accessToken = generateJWT(user.toJSON());

    return accessToken;
  }

  static async changePassword(id, passwords) {
    const password = await UserService.generateHashPassword(passwords.newPassword);

    const user = await User.findById(id);

    const match = await bcrypt.compare(passwords.oldPassword, user.password);

    const updatedUser = { ...user._doc, password };

    const userToken = generateJWT(updatedUser);

    if (!user) throw new Error('User doesn\'t exit');

    if (passwords.oldPassword === passwords.confirmPassword
      && passwords.newPassword !== passwords.oldPassword
      && match) {
      sendEmail(userToken);
    } else throw new Error('New password or confirmed password are incorrect');


    return updatedUser;
  }

  static async verifyPassword(authToken) {
    const user = verifyJWT(authToken, process.env.SECRET);
    await User.findOneAndUpdate(user._id)
    return user;
  }

  static generateHashPassword(password) {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt);
  }
}

module.exports = UserService;
