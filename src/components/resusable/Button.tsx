import { FunctionComponent } from 'react';

type Props = {
  title: string;
  className: string;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: FunctionComponent<Props> = ({
  title,
  className,
  onClick,
  onSubmit,
  type,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      onSubmit={onSubmit}
    >
      {title}
    </button>
  );
};

export default Button;
