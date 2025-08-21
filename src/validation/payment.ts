import { coerce, object } from "zod";

export const paymentSchema = object({
  amount: coerce
    .number()
    .gte(10, "Amount must be greater than 10 or equal to 10"),
});
