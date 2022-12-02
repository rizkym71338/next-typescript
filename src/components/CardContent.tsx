interface Props {
  children: any;
}

const CardContent = ({ children }: Props) => {
  return (
    <div className={`rounded-lg bg-white py-8 px-7 drop-shadow-md`}>
      <div className={`flex flex-col`}>{children}</div>
    </div>
  );
};

export default CardContent;
