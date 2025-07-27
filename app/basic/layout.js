import Link from "next/link";
import "../globals.css";

export default function BasicLayout({ children }) {
  return <div className="basic-page">{children}</div>;
}
