function Wrapper({ children, className }) {
  return (
    <div
      style={{ overflowY: 'overlay' }}
      className={`
        max-h-[500px]
        w-full h-full rounded-lg
        bg-lightSecondary text-textPrimaryLight
        dark:bg-darkSecondary 
        dark:text-textPrimaryDark  ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
