
export default function ButtonComponent({ children,  onSelect, ...props }) {
  
  return (
    <div {...props}>
      <button onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
