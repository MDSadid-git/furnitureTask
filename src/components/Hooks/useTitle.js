import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-FURNITURE`;
  }, [title]);
};
export default useTitle;
