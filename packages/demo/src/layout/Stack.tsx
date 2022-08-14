import './stack.css'; 
import cn from 'classnames';

type StackProps = {
  size?: "s" | "m" | "l";
  children: React.ReactNode;
  reverse?: boolean
};

export const Stack = ({ size = "s", children, reverse = false }: StackProps) => {
  return <div className={cn(`stack stack-${size}`, {reverse})}>{children}</div>;
};
