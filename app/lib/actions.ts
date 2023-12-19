import { z } from "zod";

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: "Please enter a name",
  }),
  email: z.string({
    invalid_type_error: "Please enter an email",
  }),
  phoneNumber: z.string({
    invalid_type_error: "Please enter a phone number",
  }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phoneNumber?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { name, email, phoneNumber } = validatedFields.data;

  try {
  } catch (error) {
    return {
      message: "Something went wrong",
    };
  }
}
