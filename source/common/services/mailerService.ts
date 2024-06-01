import nodemailer from "nodemailer";
import crypto from "crypto";
import userModel from "../../models/userModel";
import AppError from "../utils/appError";
import path from "path";
import fs from "fs";
import constant from "../config/constant";

export const sendEmail = async (
  email: string,
  emailType: string,
  userId: string
) => {
  try {
    const hashedToken = await crypto.randomBytes(32).toString("hex");

    if (emailType === constant.FORGOT) {
      await userModel.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILER_AUTH_USER,
        pass: process.env.MAILER_AUTH_PASS,
      },
    });

    const resetPasswordTemplatePath = path.join(
      __dirname,
      "..",
      "/public/template/",
      "resetPasswordTemplate.html"
    );
    let emailHtml = fs.readFileSync(resetPasswordTemplatePath, "utf-8");
    emailHtml = emailHtml.replace("{{token}}", hashedToken);

    const mailOptions = {
      from: "kevilkalathiya4266@gmail.com",
      to: email,
      subject: emailType === constant.FORGOT ? "Reset your password" : "",
      html: emailHtml,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new AppError(error.status, error.message);
  }
};
