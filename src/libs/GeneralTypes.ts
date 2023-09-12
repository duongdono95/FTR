import z from 'zod'

enum side { 'buy' , 'sell'}

export const OMFormSchema = z.object({
  sink: z.string(),
  source: z.string(),
  expiry: z.string(),
  side: z.nativeEnum(side),
  price: z.number().positive().refine(value => value > 0, {
    message: "Price must be greater than 0",
  }),
  volume: z.number().positive().refine(value => value > 0, {
    message: "Volume must be greater than 0",
  }),
  customer: z.string(),
})