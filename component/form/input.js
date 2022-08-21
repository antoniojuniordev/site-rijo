import React from "react";
import { Controller } from "react-hook-form";
const variants = ["input", "textarea"];
function Input({ error, variant = "input", ...props }) {
  const CustomInput = variants.includes(variant) ? variant : "";
  if (CustomInput) {
    return (
      <div className="input-group">
        <div className="controlled-group">
          <CustomInput {...props} className="form-control" />
          {!!error && <p className="error-input">{error?.message}</p>}
        </div>
      </div>
    );
  }

  return null;
}

export function ControlledInput({ name, control, ...props }) {
  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="input-group">
          <Input {...field} error={error} />
        </div>
      )}
    />
  );
}

export default Input;
