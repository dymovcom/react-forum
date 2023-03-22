import { FC, Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
