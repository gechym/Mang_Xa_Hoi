import nodemailer from 'nodemailer';

const email = async (opt) => {
    const Transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP_GOOGLE, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD_GOOGLE, // generated ethereal password
        },
    });

    const mailOptions = {
        from: 'nguyenducbao1662002@gmail.com',
        to: opt.to,
        subject: opt.subject,
        text: opt.message,
    };

    await Transporter.sendMail(mailOptions);
};

export default email;
