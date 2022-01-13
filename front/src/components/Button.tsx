import classNames from 'classnames';

interface IButton {
  className: string;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
