import React from "react";
import Spinner from "./Spinner";

type ButtonType =
  | "success"
  | "warning"
  | "danger"
  | "outline"
  | "primary"
  | "secondary";

type ConditionalProps =
  | {
      loading: true;
      disabled?: true;
      label?: never;
    }
  | {
      loading?: false;
      disabled?: boolean;
      label: string;
    };

type ConditionalIconProps =
  | {
      leftIcon?: JSX.Element;
      rightIcon?: never;
    }
  | {
      rightIcon?: JSX.Element;
      leftIcon?: never;
    };

type Props = {
  onClick?: () => void;
  type?: ButtonType;
} & ConditionalProps &
  ConditionalIconProps;

export default function Button({
  onClick,
  label,
  type = "primary",
  disabled,
  loading = false,
  leftIcon,
  rightIcon,
}: Props) {
  const colors: Record<ButtonType, string> = {
    success: "bg-green-400",
    warning: "bg-yellow-400",
    danger: "bg-red-400",
    outline: "bg-transparent",
    primary: "bg-teal-400",
    secondary: "bg-indigo-400",
  };

  return (
    <button
      disabled={disabled}
      className={`py-1 px-2 flex items-center gap-1 ${colors[type]} ${
        disabled ? "bg-gray-400 opacity-50" : ""
      }`}
      onClick={onClick}
    >
      {leftIcon}
      {!loading ? label : <Spinner />}
      {rightIcon}
    </button>
  );
}
