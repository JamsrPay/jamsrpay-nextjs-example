import { coerce, object } from "zod";

export const paymentSchema = object({
  amount: coerce.number().gt(10, "Amount must be greater than 10"),
});
