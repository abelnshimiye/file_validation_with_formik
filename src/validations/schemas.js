import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

export const validationSchema = yup.object({
    file: yup
    .mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Upload file is too big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Upload file has unsuppoted format.",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    )



  });