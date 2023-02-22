import {
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { Transition } from "react-transition-group";
import { usePortalContext } from "shared/config/portalProvider/PortalContext";
import { useGlobalKeys } from "shared/hooks/useGlobalKeys/useGlobalKeys";
import { classNames } from "shared/lib/classNames";
import { useClickOutside } from "shared/hooks/useClickOutside";
import { Portal } from "shared/ui/portal";
import classes from "./Modal.module.scss";

const modalPropPosition = ["center", "top"] as const;
type ModalPropPosition = (typeof modalPropPosition)[number];
const modalPropPositionDefault: ModalPropPosition = modalPropPosition[0];

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onClickOutside?: (event: MouseEvent) => void;
  onEsc?: (event: KeyboardEvent) => void;
  position?: ModalPropPosition;
  hasOverlay?: boolean;
  animateTimeout?: number;
  rootClassName?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  container?: HTMLDivElement | undefined;
  afterClose?: () => void;
}

type TransitionStatus = "entered" | "entering" | "exiting" | "exited";

const getDefaultStyle = (duration = 300): CSSProperties => {
  return { transition: `opacity ${duration}ms`, opacity: 0 };
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const ContextConsumer: FC<{
  onClickOutside?: (event: MouseEvent) => void;
  ignoreClicksInsideRefs?: ReadonlyArray<RefObject<HTMLElement>>;
  children: ReactNode;
}> = ({ onClickOutside, children, ignoreClicksInsideRefs }) => {
  const { refs } = usePortalContext();

  useClickOutside({
    isActive: !!onClickOutside,
    ignoreClicksInsideRefs: [
      ...(ignoreClicksInsideRefs || []),
      ...(refs || []),
    ],
    handler: onClickOutside,
  });

  return children as ReactElement;
};

export const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    onOpen,
    hasOverlay = true,
    onClickOutside,
    onEsc,
    className,
    position = modalPropPositionDefault,
    children,
    container = document.body,
    rootClassName,
    style,
    afterClose,
    animateTimeout = 300,
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useGlobalKeys({
    Escape: (e: KeyboardEvent) => isOpen && onEsc && onEsc(e),
  });

  useEffect(() => {
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onClose, onOpen]);

  return (
    <Transition
      in={isOpen}
      nodeRef={nodeRef}
      unmountOnExit
      timeout={animateTimeout}
      onExited={afterClose}
    >
      {(status) => (
        <Portal
          className={classNames(
            classes.modal,
            {
              [classes["has-overlay"]]: hasOverlay,
            },
            rootClassName,
          )}
          container={container}
          ref={nodeRef}
          style={
            typeof style?.zIndex === "number"
              ? { zIndex: style.zIndex }
              : undefined
          }
        >
          {hasOverlay && (
            <div
              style={{
                ...getDefaultStyle(animateTimeout),
                ...transitionStyles[status as TransitionStatus],
              }}
              className={classNames(classes.overlay)}
            />
          )}
          <div
            ref={ref}
            style={{
              ...getDefaultStyle(animateTimeout),
              ...transitionStyles[status as TransitionStatus],
              ...style,
              zIndex: undefined,
            }}
            className={classNames(
              classes.window,
              {
                [classes.window_position_top]: position === "top",
                [classes.window_position_center]: position === "center",
              },
              className,
            )}
          >
            <ContextConsumer
              onClickOutside={onClickOutside}
              ignoreClicksInsideRefs={[ref]}
            >
              {children}
            </ContextConsumer>
          </div>
        </Portal>
      )}
    </Transition>
  );
};
