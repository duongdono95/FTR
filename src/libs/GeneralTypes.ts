import z from 'zod'

export const sideSchema = z.union([z.literal('buy'), z.literal('sell')]);

export const OMFormSchema = z.object({
  sink: z.string(),
  source: z.string(),
  expiry: z.string(),
  side: sideSchema,
  price: z.number().positive({
    message: "Price must be greater than 0",
  }),
  volume: z.number().positive({
    message: "Volume must be greater than 0",
  }),
  customer: z.string(),
})
export type OMFormType = z.infer<typeof OMFormSchema>