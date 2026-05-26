type Props = {
  label?: string;
  className?: string;
  ratio?: string; // e.g. "4/3", "1/1", "16/9"
};

export function ImagePlaceholder({ label = "Image", className = "", ratio = "4/3" }: Props) {
  return (
    <div
      className={`image-placeholder w-full ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="relative z-10 px-3 text-center">{label}</span>
    </div>
  );
}
