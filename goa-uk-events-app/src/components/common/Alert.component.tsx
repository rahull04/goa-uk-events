import { Alert as AlertComponent } from 'react-bootstrap';

export enum AlertVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

interface AlertProps {
  variant?: AlertVariant;
  children: React.ReactNode;
  className?: string;
}

function Alert({ children, variant, className }: AlertProps) {
  return (
    <AlertComponent className={className} variant={variant}>
      {children}
    </AlertComponent>
  );
}

export default Alert;
