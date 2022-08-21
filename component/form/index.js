import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forwardRef, useImperativeHandle } from "react";

function FormComponent({ render, onSubmit, validations, ...props }, ref) {
  const renderForm = useForm({ resolver: yupResolver(validations), ...props });

  useImperativeHandle(ref, () => ({
    setValues(payload) {
      if (props?.defaultValues) {
        renderForm.reset(
          Object.keys(props?.defaultValues).map((key) => ({
            [key]: payload[key],
          }))
        );
      }
    },
    resetForm() {
      renderForm.reset(props?.defaultValues);
    },
  }));

  return (
    <form onSubmit={renderForm?.handleSubmit((data) => onSubmit(data))}>
      {render(renderForm)}
    </form>
  );
}
export default forwardRef(FormComponent);
