import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
  type?: string;
}
const Input = ({ placeholder, label, type, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input placeholder={placeholder}
      type={type}
      {...rest}></input>
    </div>
  );
};

export default Input;
