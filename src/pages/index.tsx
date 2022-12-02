import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  IconCalendar,
  IconCar,
  IconChevronDown,
  IconClock,
  IconFilter,
  IconNotify,
  IconSearch,
  Logo,
} from "../assets";
import {
  BadgeStatistics,
  ButtonLogout,
  CardContent,
  CardStatistics,
  MenuItem,
} from "../components";
import { Menus, Reports, StatusCars } from "../constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  return (
    <>
      <div className={`flex h-screen`}>
        {/* Main Menu */}
        <div className={`w-60 bg-black`}>
          <div
            className={`scrollbar-primary flex h-full flex-col justify-between overflow-y-auto p-6`}
          >
            <div className={`space-y-5`}>
              {/* Logo */}
              <Link href={`/`} className={`block px-2 py-6`}>
                <Logo />
              </Link>

              {/* Menu */}
              <div className={`space-y-4`}>
                {/* Navigation */}
                <ul className={`space-y-2`}>
                  {Menus.map((menu, i) => (
                    <li key={i}>
                      <MenuItem data={menu} />
                    </li>
                  ))}
                </ul>

                {/* Dash */}
                <div className={`py-2 pl-4`}>
                  <div className={`h-[1px] w-full bg-white/20`} />
                </div>

                {/* Report */}
                <div>
                  <div className={`py-3 px-4`}>
                    <span className={`text-base font-normal text-white/50`}>
                      Report
                    </span>
                  </div>
                  <ul className={`space-y-2`}>
                    {Reports.map((report, i) => (
                      <li key={i}>
                        <MenuItem data={report} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={`py-8`}>
              <ButtonLogout />
            </div>
          </div>
        </div>
        <div className={`w-80 bg-[#F8F7F1]`}>
          <div
            className={`scrollbar-primary h-full space-y-4 overflow-y-auto py-8 px-7`}
          >
            <div className={`flex flex-col`}>
              <h2 className={`text-xl font-medium leading-[30px] text-gray-01`}>
                Todays Statistics
              </h2>
              <p className={`text-sm font-normal leading-[18px] text-gray-03`}>
                Tue, 14 Nov, 2022, 11.30 AM{" "}
              </p>
            </div>
            <CardStatistics>
              <div className={`border-b border-[#656575]/20`}>
                <div className={`flex items-center justify-between`}>
                  <h3 className={`text-lg font-medium leading-6 text-gray-02`}>
                    Income
                  </h3>
                  <BadgeStatistics text={`Today`} />
                </div>
                <div className={`flex items-end justify-between py-3`}>
                  <h1 className={`text-[28px] font-bold leading-10 text-black`}>
                    $ 9460.00
                  </h1>
                  <span
                    className={`text-base font-medium leading-7 text-secondary`}
                  >
                    ↓ 1.5%
                  </span>
                </div>
              </div>
              <div className={`flex flex-col`}>
                <p className={`text-sm font-light leading-6 text-gray-02`}>
                  Compared to $9940 yesterday
                </p>
                <p className={`text-sm font-medium leading-6 text-gray-02`}>
                  Last week $25658.00
                </p>
              </div>
            </CardStatistics>
            <CardStatistics>
              <div className={`border-b border-[#656575]/20`}>
                <div className={`flex items-center justify-between`}>
                  <h3 className={`text-lg font-medium leading-6 text-gray-02`}>
                    Expences
                  </h3>
                  <BadgeStatistics text={`Today`} />
                </div>
                <div className={`flex items-end justify-between py-3`}>
                  <h1 className={`text-[28px] font-bold leading-10 text-black`}>
                    $ 5660.00
                  </h1>
                  <span
                    className={`text-base font-medium leading-7 text-green`}
                  >
                    ↑ 2.5%
                  </span>
                </div>
              </div>
              <div className={`flex flex-col`}>
                <p className={`text-sm font-light leading-6 text-gray-02`}>
                  Compared to $5240 yesterday{" "}
                </p>
                <p className={`text-sm font-medium leading-6 text-gray-02`}>
                  Last week $25658.00{" "}
                </p>
              </div>
            </CardStatistics>
            <CardStatistics>
              <div className={`space-y-7`}>
                <div className={`flex items-center justify-between`}>
                  <h3 className={`text-lg font-medium leading-6 text-gray-02`}>
                    Hire vs Cancel
                  </h3>
                  <BadgeStatistics text={`Today`} />
                </div>
                <div className="mx-auto aspect-square w-36">
                  <Doughnut data={data} options={{ cutout: 44 }} />
                </div>
                <div className={`flex flex-col space-y-2`}>
                  <div
                    className={`flex items-center justify-between space-x-3`}
                  >
                    <div
                      className={`aspect-square w-4 rounded-full bg-primary`}
                    />
                    <p
                      className={`flex-1 text-[15px] font-normal leading-6 text-black`}
                    >
                      Total Hired
                    </p>
                    <p
                      className={`text-[15px] font-normal leading-6 text-black`}
                    >
                      54% <span className={`text-green`}>↑</span>
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-between space-x-3`}
                  >
                    <div
                      className={`aspect-square w-4 rounded-full bg-green`}
                    />
                    <p
                      className={`flex-1 text-[15px] font-normal leading-6 text-black`}
                    >
                      Total Canceled
                    </p>
                    <p
                      className={`text-[15px] font-normal leading-6 text-black`}
                    >
                      20% <span className={`text-green`}>↑</span>
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-between space-x-3`}
                  >
                    <div
                      className={`aspect-square w-4 rounded-full bg-secondary`}
                    />
                    <p
                      className={`flex-1 text-[15px] font-normal leading-6 text-black`}
                    >
                      Total Pending
                    </p>
                    <p
                      className={`text-[15px] font-normal leading-6 text-black`}
                    >
                      26% <span className={`text-secondary`}>↓</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardStatistics>
          </div>
        </div>
        <div className={`scrollbar-primary h-full flex-1 overflow-y-auto`}>
          <div className={`mx-auto h-full w-full max-w-4xl`}>
            <div className={`flex h-full flex-col space-y-5 py-7 px-6`}>
              {/* search & Notify */}
              <div className={`flex items-center justify-end space-x-10`}>
                <IconNotify className={`text-gray-02`} />
                <div
                  className={`flex w-96 space-x-6 rounded-xl bg-white py-3 pl-8 pr-6 drop-shadow-md`}
                >
                  <input
                    type={`text`}
                    placeholder={`Search Here`}
                    className={`flex-1 text-gray-03 focus:outline-none`}
                  />
                  <IconSearch />
                </div>
              </div>

              {/* Car Availability */}
              <CardContent>
                <div className={`flex flex-col space-y-4`}>
                  <h4 className={`text-base font-semibold text-black`}>
                    Car Availability
                  </h4>
                  <div className={`flex items-center justify-between`}>
                    {/* Card Number */}
                    <div
                      className={`flex items-center space-x-3 rounded-lg border border-[#DEDEDE] px-4 py-3 text-gray-02`}
                    >
                      <IconCar className={`fill-gray-02`} />
                      <span className={`min-w-[120px]`}>Car Number</span>
                      <IconChevronDown />
                    </div>

                    {/* Date Picker */}
                    <div
                      className={`flex items-center rounded-lg border border-[#DEDEDE] text-gray-02`}
                    >
                      <div
                        className={`flex items-center space-x-3 border-r border-[#dedede] px-4 py-3`}
                      >
                        <IconCalendar />
                        <span className={`min-w-[140px]`}>Nov 20, 2022</span>
                      </div>
                      <div className={`flex items-center space-x-3 px-4 py-3`}>
                        <IconClock />
                        <span className={`min-w-[60px]`}>10 AM</span>
                        <IconChevronDown />
                      </div>
                    </div>

                    {/* Button check */}
                    <button
                      className={`rounded bg-primary px-9 py-3 text-white`}
                    >
                      Check
                    </button>
                  </div>
                </div>
              </CardContent>

              {/* Car Status */}
              <CardContent>
                <div className={`flex items-center justify-between`}>
                  <h4 className={`font-semibold`}>Live Car Status</h4>
                  <div
                    className={`flex items-center justify-center space-x-2 px-4 text-gray-01`}
                  >
                    <IconFilter />
                    <span className={`font-medium`}>Filter</span>
                  </div>
                </div>
                <table className={`w-full text-left`}>
                  <thead>
                    <tr
                      className={`border-b border-[#A3A3A3]/25 text-sm font-light leading-[18px] text-gray-02`}
                    >
                      <td className={`py-3`}>No.</td>
                      <td className={`py-3`}>Car No.</td>
                      <td className={`py-3`}>Driver</td>
                      <td className={`py-3`}>Status</td>
                      <td className={`py-3`}>Earning</td>
                      <td className={`py-3`}></td>
                    </tr>
                  </thead>
                  <tbody>
                    {StatusCars.map((status, i) => (
                      <tr
                        key={status.id}
                        className={`border-b border-[#A3A3A3]/25`}
                      >
                        <td className={`py-3 text-xs font-normal text-black`}>
                          {i + 1}
                        </td>
                        <td className={`py-3`}>
                          <span
                            className={`rounded bg-[#999999]/10 py-1 px-3 font-normal text-black`}
                          >
                            {status.id}
                          </span>
                        </td>
                        <td className={`py-3 text-base font-normal text-black`}>
                          {status.name}
                        </td>
                        <td
                          className={`${
                            status.status === "completed"
                              ? "text-green"
                              : status.status === "pending"
                              ? "text-primary"
                              : "text-secondary"
                          } py-3 text-base font-light capitalize`}
                        >
                          {status.status}
                        </td>
                        <td className={`py-3`}>$ {status.earning}</td>
                        <td className={`py-3`}>
                          <button
                            className={`rounded bg-primary py-1 px-4 text-base font-normal text-white`}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>

              {/* Earning Summary */}
              <CardContent>
                <div></div>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const data = {
  datasets: [
    {
      label: "Persentase",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};
