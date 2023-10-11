import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: "torawanedipanshu@gmail.com",
    pass: "jrmsvkfkqykzqcos",
  },
});

export default transporter;
