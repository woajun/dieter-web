import { ReactNode } from "react";

type Props = {
  color?: string;
  size?: number;
  children: ReactNode;
  bold?: boolean;
};
export const Text = ({ color, size, children, bold }: Props) => {
  return (
    <span
      style={{
        color,
        fontSize: size + "px",
        fontWeight: bold ? 900 : undefined,
      }}
    >
      {children}
    </span>
  );
};
