const GLITCH_LAYER_COUNT = 5;

function GlitchImage({ src, alt, wrapperClassName, imageClassName, layerCount = GLITCH_LAYER_COUNT }) {
  return (
    <div className={wrapperClassName}>
      {Array.from({ length: layerCount }, (_, i) => (
        <img key={i} src={src} alt={alt} className={imageClassName} />
      ))}
    </div>
  );
}

export default GlitchImage;
