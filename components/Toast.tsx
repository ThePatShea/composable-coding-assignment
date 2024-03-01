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
    <div className="fixed top-5 right-5 bg-red-500 text-white p-2.5 z-50">
      {message}
    </div>
  );
};

export default Toast;
