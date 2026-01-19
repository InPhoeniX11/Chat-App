// import { Resend } from "resend";
// import { ENV } from "./env.js";

// export const resendClient = new Resend(ENV.RESEND_API_KEY);

// export const sender = {
//   email: ENV.EMAIL_FROM,
//   name: ENV.EMAIL_FROM_NAME,
// };


import { Resend } from "resend";
import { ENV } from "./env.js";

let resendClient = null;

if (ENV.NODE_ENV === "production") {
  if (!ENV.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing in production");
  }

  resendClient = new Resend(ENV.RESEND_API_KEY);
}

export { resendClient };

export const sender = {
  email: ENV.EMAIL_FROM || "no-reply@example.com",
  name: ENV.EMAIL_FROM_NAME || "App",
};
