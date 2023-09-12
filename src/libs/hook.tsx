export const zodCheck = (schema: any, onSubmit: (values: any) => void) => {
  return {
    onSubmit: (values: any) => {
      schema.parse(values);
      onSubmit(values);
    },
  };
};
