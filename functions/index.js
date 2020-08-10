require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const response = {
  isBase64Encoded: false,
  headers: {
    "Access-Control-Allow-Origin": "https://spark.torchnyu.com"
  }
}
exports.handler = async (event) => {
    if (!event.body) {
      return { ...response, statusCode: 400, body: JSON.stringify({ message: "No body provided"})}
    }
    let body;
    try {
      body = JSON.parse(event.body);
    } catch(e) {
      return { ...response, statusCode: 400, body: JSON.stringify({ message: "Invalid body provided"})}
    }
  const {email, name, role} = body;
  if (!email || !name || !role) {
      return { ...response, statusCode: 400, body: JSON.stringify({ message: "Invalid request :("})}
    }
    const menteeMsg = {
      to: email,
      from: 'wintermute@spark.torchnyu.com',
      subject: `Welcome to Spark!`,
      text: "Hi, I hear you're interested in Spark. We'll be in touch soon",
      html: "Hi, I hear you're interested in Spark. We'll be in touch soon"
    };
    let text = `${name} appears to be interested in Spark. You can reach them at ${email}. They're interested in being a ${role}`;
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
    try {
      const res = await Promise.all([sgMail.send(menteeMsg), sgMail.send(mentorMsg)]);
      return { ...response, statusCode: 200, body: JSON.stringify({ message: "Emails sent!", emailResponse: res}), }
    } catch (error) {
      return { ...response, statusCode: 500, body: JSON.stringify({ message: "Failed to send emails", error })}
    }
};
