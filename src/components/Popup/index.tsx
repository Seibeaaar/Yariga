import { FC, useRef, useEffect, ReactNode } from "react";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Popup: FC<PopupProps> = ({ open, onClose, children, className }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (open && popupRef.current) {
        e.target instanceof HTMLElement &&
          !popupRef.current.contains(e.target) &&
          onClose();
      }
      return null;
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [popupRef, open, onClose]);

  return (
    <div
      ref={popupRef}
      className={`transition-transform origin-top ${
        open ? "scale-y-1" : "scale-y-0"
      } absolute bg-white dark:bg-bg-black rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Popup;
