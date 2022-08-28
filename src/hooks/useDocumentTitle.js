import { useEffect } from "preact/hooks";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
