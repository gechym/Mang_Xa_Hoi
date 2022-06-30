function Wrapper({ children, className }) {
  return (
    <div
      style={{ overflowY: 'overlay' }}
      className={`
        max-h-[500px]
        w-full h-full rounded-md
        bg-lightBtn text-textPrimaryLight
        dark:bg-darkBtn
        dark:text-textPrimaryDark  ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
