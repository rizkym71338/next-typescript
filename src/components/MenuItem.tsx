import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  data: {
    name: string;
    href: string;
    icon: any;
  };
}

const MenuItem = (props: Props) => {
  const { data } = props;

  const { route } = useRouter();

  return (
    <Link
      href={data.href}
      className={`${
        route === data.href
          ? "bg-primary font-medium text-white"
          : "font-normal text-white/75 hover:bg-gray-01/50"
      } relative flex items-center space-x-3 rounded py-3 px-4 text-base transition-all`}
    >
      {data?.icon}
      <span>{data.name}</span>
      <div
        className={`${
          route === data.href ? "" : "opacity-0"
        } absolute -left-3 h-2/3 w-1.5 rounded-full bg-white transition-all`}
      />
    </Link>
  );
};

export default MenuItem;
