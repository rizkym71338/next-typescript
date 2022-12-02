interface Props {
  children: any;
}

const CardStatistics = (props: Props) => {
  return (
    <div className={`rounded-lg bg-white p-6 drop-shadow-md`}>
      <div className={`flex flex-col space-y-3`}>{props.children}</div>
    </div>
  );
};

export default CardStatistics;
