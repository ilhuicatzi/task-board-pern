export function Button({ children, className, ...props }) {
  return (
    <button
      className={`p-1 relative inline-flex items-center gap-x-2  bg-indigo-600 mt-2 text-md font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
