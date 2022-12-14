import React from "react";
import { Controller } from "react-hook-form";
function Input({ error, variant = "input", ...props }) {
  return (
    <div className="input-group">
      <div className="controlled-group">
        <input {...props} className="form-control" />
        {!!error && <p className="error-input">{error?.message}</p>}
      </div>
    </div>
  );
}

export function ControlledInput({ name, placeholder, control, ...props }) {
  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="input-group">
          <Input {...field} placeholder={placeholder} error={error} />
        </div>
      )}
    />
  );
}

export default Input;
