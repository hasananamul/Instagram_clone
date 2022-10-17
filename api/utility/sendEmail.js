import nodemailer from "nodemailer"

/**
 * Create email
 */
const sendEmail = async (to, subject, text) => {
      try {
        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "rafinakon44541@gmail.com",
                pass: "slxuopjmthwmyjwr"
                  }
      });

      await transport.sendMail({
            from : "rafinakon44541@gmail.com",
            to : to,
            subject : subject,
            text : text
      })
      } catch (error) {
            console.log(error);
      }
}


export default sendEmail;