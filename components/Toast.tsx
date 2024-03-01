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
    <div className="fixed top-5 right-5 rounded-full p-4 z-50 select-none text-xs text-peppermint bg-peppermint-opacity-10">
      {message}
    </div>
  );
};

export default Toast;
