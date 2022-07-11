function Wrapper({ children, className }) {
  const getClassTheme = () => {
    return `text-textPrimaryLight dark:bg-darkSecondary dark:text-textPrimaryDark`;
  };

  return (
    <div
      style={{ overflowY: 'overlay' }}
      className={`
        shadow-lg
        max-h-[70vh]
        w-full h-full rounded-lg
        bg-lightSecondary ${getClassTheme()} ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
