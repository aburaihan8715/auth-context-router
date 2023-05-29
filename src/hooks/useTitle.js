import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Router Auth Context`;
  }, [title]);
};

export default useTitle;
