import { useLayoutEffect } from "preact/hooks";

function useDocumentTitle(pageTitle) {
  useLayoutEffect(() => {
    document.title = `${pageTitle} - Shop`;
  }, [pageTitle]);
}

export default useDocumentTitle;
