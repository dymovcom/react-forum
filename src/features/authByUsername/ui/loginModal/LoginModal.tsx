import { FC } from "react";
import { Modal } from "shared/ui/modal";
import { LoginForm } from "../loginForm/LoginForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose}>
      <LoginForm />
    </Modal>
  );
};
