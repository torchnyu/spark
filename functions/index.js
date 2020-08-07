require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler = async (event) => {
    if (!event.email || !event.name) {
	return { statusCode: 400, body: "Invalid Input :("};
    }
    const { email, name } = event;
    const menteeMsg = {
	to: email,
	from: 'wintermute@spark.torchnyu.com',
	subject: `Welcome to Spark!`,
	text: "Hi, I hear you're interested in Spark. We'll be in touch soon",
	html: "Hi, I hear you're interested in Spark. We'll be in touch soon"
    };
    let text = `${name} appears to be interested in Spark. You can reach them at ${email}`;
    if (event.github) {
	text += `. Also their GitHub username is ${event.github}`;
    }
    const mentorMsg = {
	to: ["nick@nicholasyang.com", "al5932@nyu.edu", "khanhnguyen99hn@gmail.com"],
	from: 'wintermute@spark.torchnyu.com',
	subject: `New Spark Member: ${name}`,
	text,
	html: text
    }
    return await Promise.all([sgMail.send(menteeMsg), sgMail.send(mentorMsg)]);
};
