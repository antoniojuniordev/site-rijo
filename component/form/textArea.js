import React from "react";
import { Controller } from "react-hook-form";
function TextArea({ error, ...props }) {
  return (
    <div className="input-group">
      <div className="controlled-group controlled-group-text-area">
        <textarea {...props} className="form-control" />
        {!!error && <p className="error-input">{error?.message}</p>}
      </div>
    </div>
  );
}

export function ControlledTextArea({ name, placeholder, control, ...props }) {
  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="input-group">
          <TextArea {...field} placeholder={placeholder} error={error} />
        </div>
      )}
    />
  );
}

export default ControlledTextArea;
