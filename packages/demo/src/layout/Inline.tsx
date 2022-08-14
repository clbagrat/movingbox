import './inline.css'; 

type InlineProps = {
  size: "s" | "m" | "l";
  children: React.ReactNode;
};

export const Inline = ({ size, children }: InlineProps) => {
  return <div className={`inline inline-${size}`}>{children}</div>;
};
