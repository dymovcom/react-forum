import { forwardRef, HTMLProps, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  PortalProvider,
  usePortalContext,
} from "shared/config/portalProvider/PortalContext";
import { useForkRef } from "shared/hooks/useForkRef";

interface PortalProps extends HTMLProps<HTMLDivElement> {
  container?: HTMLElement;
}

const getZIndex = (contextZIndex?: number, propZIndex?: number | string) => {
  if (typeof propZIndex === "number") {
    return propZIndex;
  }

  if (contextZIndex) {
    return contextZIndex + 1;
  }

  return undefined;
};

export const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const {
    children,
    container = document.body,
    style: styleProps,
    ...otherProps
  } = props;
  const { addRefs, zIndex: zIndexContext } = usePortalContext();
  const portalRef = useRef(null);
  const zIndex = getZIndex(zIndexContext, styleProps?.zIndex);

  const style = {
    ...styleProps,
    zIndex,
  };

  useEffect(() => {
    if (addRefs) {
      addRefs([portalRef]);
    }
  }, [addRefs, portalRef]);

  return createPortal(
    <PortalProvider zIndex={zIndex}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div ref={useForkRef([portalRef, ref])} style={style} {...otherProps}>
        {children}
      </div>
    </PortalProvider>,
    container,
  );
});
