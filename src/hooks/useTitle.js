import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Auth Context Router`;
  }, [title]);
};

export default useTitle;
