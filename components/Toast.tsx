import { useState, useEffect, FC } from "react";

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast: FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), duration);

    return () => clearTimeout(timer);
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "black",
        color: "white",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
