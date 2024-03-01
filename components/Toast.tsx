import { useState, useEffect, FC } from "react";

interface ToastProps {
  message: string;
  key: number;
}

const Toast: FC<ToastProps> = ({ message, key }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 5000);

    return () => clearTimeout(timer);
  }, [message, key]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 right-5 bg-red-500 text-white p-2.5 z-50 select-none">
      {message}
    </div>
  );
};

export default Toast;
