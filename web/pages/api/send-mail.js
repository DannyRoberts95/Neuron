const nodemailer = require('nodemailer');

export default async (req, res) => {
    // 1. Destructure from the request body.
    const { email, message, subject, name } = req.query;
    console.clear();

    const errMsg = "Whoops, that didn't work. Huh...";

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    } else
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'contactneuron663@gmail.com',
                    pass: 'Javawax2002'
                }
            });

            const mailOptions = {
                from: 'contactneuron663@gmail.com',
                to: email,
                subject,
                text: message
            };

            transporter.sendMail(mailOptions, (error, info) => {
                // console.log('info', info);
                if (error) {
                    console.log('ERROR');
                    return res.status(400).json({ error: null, info });
                } else {
                    console.log('ALL GOOD!');
                    return res.status(200).json({ error: errMsg, info });
                }
            });
        } catch (error) {
            console.log('ERROR');
            return res.status(500).json({ error: errMsg });
        }
};
