import { useEffect } from "react";

const useDetectOutsideClick = (refs, cb) => {
  useEffect(() => {
    document.addEventListener("mousedown", cb, true);

    return () => document.removeEventListener("mousedown", cb, true);
  }, [refs, cb]);
};

export default useDetectOutsideClick;
