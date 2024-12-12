import { useLayoutEffect } from "preact/hooks";

function useDocumentTitle(pageTitle) {
  useLayoutEffect(() => {
    document.title = `${pageTitle || "Loading"} - Shop`;
  }, [pageTitle]);
}

export default useDocumentTitle;
