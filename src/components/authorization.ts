import { z } from 'zod';

const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).+$/;

export const AuthSchema = z.object({
  username: z.string().trim().min(3, { message: 'Name must be at least 3 characters' }),
  password: z
    .string({ error: 'Required field' })
    .trim()
    .min(8, { message: 'At least 8 characters needed' })
    .regex(passwordRegex, {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!',
    }),
    passConfirmation: z.string({ error: 'Required field' })
    .trim()
    .min(8, { message: 'At least 8 characters needed' })
    .regex(passwordRegex, {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!',
    })
});

export const LoginSchema = z.object({
  username: z.string().trim().min(3, { message: 'Name must be at least 3 characters' }),
  password: z
    .string({ error: 'Required field' })
    .trim()
    .min(8, { message: 'At least 8 characters needed' })
    .regex(passwordRegex, {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!',
    }),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;