import React, { useState } from "react";

const InputCustom = ({
  title,
  type,
  name,
  placeholder,
  value,
  required,
  onChange,
  val,
  disabled,
  className,
  max,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex mt-6 flex-col items-start gap-2 p-2 w-full max-md:ml-0">
      <label className="font-extrabold">
        {title} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative w-full">
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`w-full p-2 rounded-xl border-2 outline-primary pr-10 max-md:w-full ${className}`}
          name={name}
          value={value}
          defaultValue={val}
          onChange={onChange}
          disabled={disabled}
          maxLength={max}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="ri-eye-line text-lg"></i> // Open eye icon
            ) : (
              <i className="ri-eye-off-line text-lg"></i> // Closed eye icon
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputCustom;
