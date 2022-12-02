interface Props {
  text: string;
}

const BadgeStatistics = (props: Props) => {
  return (
    <div className={`bg-gray-04 px-2 py-1 text-xs font-normal text-gray-02`}>
      {props.text}
    </div>
  );
};

export default BadgeStatistics;
