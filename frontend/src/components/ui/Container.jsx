

export function Container({ children, className }) {
  return (
    <div className={"max-w-7xl px-10 mx-auto" + className}>
        {children}
    </div>
  )
}

export default Container