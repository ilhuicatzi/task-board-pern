export function Button({ children }) {
  return (
    <button
      className="relative inline-flex items-center gap-x-2 rounded-lg bg-sky-600 px-3  py-2 my-2 text-sm font-semibold text-white shadow-md hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:opacity-50 disabled:cursor-not-allowed
     "
    >
      {children}
    </button>
  );
}

export default Button;
