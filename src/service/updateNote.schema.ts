import { object, string, boolean } from "yup";
export default object({
  body: object({
    name: string(),
    category: string(),
    content: string(),
    isArchived: boolean(),
  })
    .noUnknown(true, "Unknown data format")
    .strict(),
});
