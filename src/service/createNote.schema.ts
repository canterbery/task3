import { object, string, boolean } from "yup";
export default object({
  body: object({
    name: string(),
    created: string(),
    category: string().required("Note category is required"),
    content: string().required("Note content is required"),
    isArchived: boolean().required("Note active/archived status is required"),
  })
    .noUnknown(true, "Unknown data")
    .strict(),
});
