import { useState, useEffect, FC } from "react";

import CheckCircleIcon from "@/components/SvgIcon/CheckCircleIcon";

interface ToastProps {
  message: string;
  key: number;
}

const Toast: FC<ToastProps> = ({ message, key }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // const timer = setTimeout(() => setIsVisible(false), 5000);

    return () => clearTimeout(timer);
  }, [message, key]);

  if (!isVisible) return null;

  return (
    <div className="fixed flex top-6 right-8 rounded-full px-[18px] py-4 z-50 select-none text-xs text-peppermint bg-peppermint-opacity-10">
      <CheckCircleIcon height={16} width={16} />
      <div className="ml-[10px]">{message}</div>
    </div>
  );
};

export default Toast;
