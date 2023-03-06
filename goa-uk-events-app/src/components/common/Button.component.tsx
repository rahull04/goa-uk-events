import { Button as ButtonComponent, CloseButton } from 'react-bootstrap';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonType {
  CLOSE = 'close',
}

interface ButtonProps {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  className?: string;
  onClick: () => any;
  type?: ButtonType;
}

const Button = ({ variant, children, className, onClick, type }: ButtonProps) => {
  if (type === ButtonType.CLOSE) {
    return <CloseButton className={className} />;
  }
  return (
    <ButtonComponent onClick={onClick} className={className} variant={variant}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
