

export function Card({children, className}) {
    return (
      <div className={`bg-zinc-950 px-4 pt-4 p-1 rounded-xl ${className}`}>
          {children}
      </div>
    )
  }
  

  export function Button({ children, className, ...props }) {
    return (
      <button
        className={`p-0.5 relative inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 mt-2 text-md font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  