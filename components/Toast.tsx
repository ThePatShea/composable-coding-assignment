import { useState, useEffect, FC } from "react";

import CheckCircleIcon from "@/components/SvgIcon/CheckCircleIcon";

interface ToastProps {
  message: string;
  key: number;
}

const Toast: FC<ToastProps> = ({ message, key }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 50);

    const timeout = setTimeout(() => setIsVisible(false), 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [message, key]);

  if (!isVisible) return null;

  const progressBarStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="fixed top-6 right-8 rounded-full overflow-hidden z-50 select-none bg-deep-catch">
      <div className="flex flex-col px-[18px] pt-4 bg-peppermint-opacity-10 text-xs text-peppermint">
        <div className="flex items-center">
          <CheckCircleIcon height={16} width={16} />
          <div className="ml-[10px]">{message}</div>
        </div>
        <div className="h-[2px] bg-peppermint-opacity-50 rounded-full mt-[14px]">
          <div
            className="h-full bg-peppermint-opacity-80 rounded-full"
            style={progressBarStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;
