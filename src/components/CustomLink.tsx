import { Link, NavLink } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export function CustomLink({ to, label }: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:underline ${isActive ? "underline" : ""}`
      }
      to={to}
    >
      {label}
    </NavLink>
  );
}
