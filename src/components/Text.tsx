import { ReactNode } from "react";

type Props = {
  color?: string;
  size?: number;
  children: ReactNode;
  fontWeight?: number;
  bold?: boolean;
};
export const Text = ({
  color,
  size,
  children,
  fontWeight = 400,
  bold = false,
}: Props) => {
  return (
    <span
      style={{
        color,
        fontSize: size + "px",
        fontWeight: bold ? 900 : fontWeight,
      }}
    >
      {children}
    </span>
  );
};
