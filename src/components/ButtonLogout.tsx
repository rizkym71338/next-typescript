import { IconLogout } from "../assets";

interface Props {}

const ButtonLogout = (props: Props) => {
  return (
    <button
      className={`flex items-center justify-center space-x-3 rounded-lg bg-white/20 py-3 px-12`}
    >
      <IconLogout className={`text-white`} />
      <span className={`text-lg font-medium leading-6 text-white`}>Logout</span>
    </button>
  );
};

export default ButtonLogout;
