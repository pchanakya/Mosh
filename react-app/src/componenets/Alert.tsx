import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  setvid: () => void;
}

const Alert = ({ children, setvid }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setvid();
        }}
      ></button>
    </div>
  );
};

export default Alert;
