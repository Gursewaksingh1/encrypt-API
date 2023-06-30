let envData = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    SECRET_CUSTOMER: process.env.SECRET_CUSTOMER,
    REFRESH_TOKEN_SECRET_CUSTMOER: process.env.REFRESH_TOKEN_SECRET_CUSTMOER,
    MONGODB_URI_TENANT: process.env.MONGODB_URI_TENANT,
    MONGODB_URI_ADMIN: process.env.MONGODB_URI_ADMIN,
    DEFAULT_TENANT: process.env.DEFAULT_TENANT,
    BUCKET_NAME: process.env.BUCKET_NAME,
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    REGION: process.env.REGION,
    DOMAIN:process.env.DOMAIN,
    PASSWORD: process.env.PASSWORD,
    EMAIL:process.env.EMAIL,
  };
  module.exports = envData;
  