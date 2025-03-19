import { FC } from "react";
import { fonts } from "@/config/fonts";

interface InputFieldProps {
  name: string;
  type?: "text" | "select" | "file" | "textarea";
  placeholder?: string;
  options?: string[];
  value?: string;
  required?: boolean;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  options = [],
  value,
  required = false,
  error,
  ...rest
}) => {
  return (
    <div className="space-y-2">
      {type === "text" && (
        <input
          {...rest}
          type="text"
          id={name}
          name={name}
          value={value}
          placeholder={placeholder + (required ? " *" : "")}
          required={required}
          className={`${
            fonts.inter
          } w-full p-6 bg-[#F9F9FF] text-[#110C3E] border ${
            error ? "border-red-500" : "border-gray-100"
          } focus:ring-0 focus:ring-[#110C3E] focus:border-[#110C3E]/70 focus:outline-none`}
        />
      )}
      {type === "select" && (
        <select
          {...rest}
          id={name}
          name={name}
          value={value}
          required={required}
          className={`${
            fonts.inter
          } w-full p-6 bg-[#F9F9FF] text-[#110C3E] border ${
            error ? "border-red-500" : "border-gray-100"
          } focus:ring-0 focus:ring-[#110C3E] focus:border-[#110C3E]/70 focus:outline-none`}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "textarea" && (
        <textarea
          {...rest}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder + (required ? " *" : "")}
          required={required}
          rows={6}
          className={`${
            fonts.inter
          } w-full p-6 bg-[#F9F9FF] text-[#110C3E] border ${
            error ? "border-red-500" : "border-gray-100"
          } focus:ring-0 focus:ring-[#110C3E] focus:border-[#110C3E]/70 focus:outline-none`}
        />
      )}
      {type === "file" && (
        <input
          {...rest}
          type="file"
          id={name}
          name={name}
          required={required}
          className={`${
            fonts.inter
          } w-full p-6 bg-[#F9F9FF] text-[#110C3E] border ${
            error ? "border-red-500" : "border-gray-100"
          } focus:ring-0 focus:ring-[#110C3E] focus:border-[#110C3E]/70 focus:outline-none`}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
