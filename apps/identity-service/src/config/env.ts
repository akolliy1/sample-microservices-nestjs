const NODEMAILER_AUTH_PASS =
  '44c0ff08f80ceebf54ebd996f77118dd:31038f9861ff18ba60d2';
const SENDGRID =
  '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';

export default () => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  client: {
    url: process.env.CLIENT_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
  },
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  mailgun: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    host: process.env.MAILGUN_HOST,
    from: 'admin@prestigue-hr.tk ',
  },
  nodemailer: {
    user: process.env.NODEMAILER_AUTH_USER || 'adesanmiakoladedotun@gmail.com',
    pass: process.env.NODEMAILER_AUTH_PASS || NODEMAILER_AUTH_PASS,
    service: process.env.NODEMAILER_SERVICE || 'Gmail',
  },
  sendgrid: {
    api_key: process.env.SENDGRID_API_KEY || SENDGRID,
  },
  email: {
    service: 'mailgun',
    template: {
      WELCOME: 'a_registration_mail',
    },
  },
});
