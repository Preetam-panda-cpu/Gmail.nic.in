let mailer = require("nodemailer");
//how to send mails from nodejs
let sendMail = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "pandapreetam237@gmail.com",
        pass: "",
    },
});

let MailOptions = {
    from: "pandapreetam237@gmail.com",
    to: "preetampanda1998@gmail.com",
    subject: "we are testing sending mails",
    html:`
    <h1 style="color:red">Nodemailer modules is rocks...</h1>
    <p style="color:'#999'">You can park all your domains for your future project an email account.</p>
    `,
};

sendMail.sendMail(MailOptions, (err) => {
    if (err) throw err;
    console.log("successfully mail sent.....");
});