interface Props {
  clasName?: string;
}

const IconSearch = (props: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.0001 21L16.5141 16.506L21.0001 21ZM19.0001 10.5C19.0001 12.7543 18.1046 14.9163 16.5105 16.5104C14.9165 18.1045 12.7545 19 10.5001 19C8.24578 19 6.08377 18.1045 4.48971 16.5104C2.89566 14.9163 2.00012 12.7543 2.00012 10.5C2.00012 8.24566 2.89566 6.08365 4.48971 4.48959C6.08377 2.89553 8.24578 2 10.5001 2C12.7545 2 14.9165 2.89553 16.5105 4.48959C18.1046 6.08365 19.0001 8.24566 19.0001 10.5V10.5Z"
        stroke="currentColor"
        strokeWidth="1.80206"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconSearch;
