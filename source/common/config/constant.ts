const ROLES = {
  USER: "User",
};
const STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  DELETE: "Deleted",
};

const REGEX = {
  MONGO_ID: /^[0-9a-fA-F]{24}$/,
};

const PAYMENT_STATUS = {
  REFUNDED: "refunded",
  CREATED: "created",
  AUTHORIZED: "authorized",
  FAILED: "failed",
  CAPTURED: "captured",
  CASH: "cash",
  ONLINE: "online",
  PAID: "Paid",
  NOT_PAID: "Not Paid",
};
const saltRounds = 10;
const OTP_EXPIRY = 600;

export default {
  ROLES,
  STATUS,
  saltRounds,
  OTP_EXPIRY,
  PAYMENT_STATUS,
  REGEX,
};
