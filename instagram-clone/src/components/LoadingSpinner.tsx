export default function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClass = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-2",
    large: "w-12 h-12 border-3",
  }[size];

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizeClass} border-t-blue-500 border-blue-200 rounded-full animate-spin`}></div>
    </div>
  );
}
