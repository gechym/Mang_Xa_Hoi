import Button from '../Button';

const MenuItem = ({ data, onClick }) => {
  const getClassBoder = () => 'border-[#ced0d4] dark:border-[#3e4042]';
  const getClassTheme = () => 'hover:!bg-lightHoverIcon dark:hover:!bg-darkHoverIcon';
  return (
    <div className={`${data.separate && `border-t ${getClassBoder()} `}`}>
      <Button
        to={data.to ? data.to : ''}
        href={data.href ? data.href : undefined}
        leftIcon={data.icon}
        onClick={onClick}
        className={`m-0 w-full items-start justify-start p-2 !bg-transparent ${getClassTheme()}`}
      >
        {data.title}
      </Button>
    </div>
  );
};

// #ced0d4

//#3e4042

export default MenuItem;
