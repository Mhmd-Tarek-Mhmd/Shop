import fallback from "../assets/images/no-preview.png";

function ImageWithFallback({ errorCb, ...props }) {
  const handleError = (e) => {
    e.currentTarget.src = fallback;
    errorCb && errorCb(e.currentTarget);
  };

  return <img {...props} onError={handleError} />;
}

export default ImageWithFallback;
