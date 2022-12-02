import {
  IconReportPayment,
  IconReportReport,
  IconReportTransaction,
} from "../assets";

const Reports = [
  {
    icon: <IconReportPayment />,
    name: "Payment Details",
    href: "/payment-details",
  },
  {
    icon: <IconReportTransaction />,
    name: "Transactions",
    href: "/transactions",
  },
  {
    icon: <IconReportReport />,
    name: "Car Reports",
    href: "/car-reports",
  },
];

export default Reports;
