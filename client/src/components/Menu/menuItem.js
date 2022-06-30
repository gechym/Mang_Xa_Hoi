import Button from '../Button';

const MenuItem = ({ data, onClick }) => {
  return (
    <div>
      <Button
        to={data.to ? data.to : ''}
        href={data.href ? data.href : undefined}
        leftIcon={data.icon}
        onClick={onClick}
        className="m-0 w-full items-start justify-start p-2"
      >
        {data.title}
      </Button>
    </div>
  );
};

export default MenuItem;
