import { FC, Suspense } from "react";
import { Loader } from "shared/ui/loader";
import { Modal } from "shared/ui/modal";
import { LoginFormAsync } from "../loginForm/LoginForm.async";

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
