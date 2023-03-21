import Link from "next/link";

export default function NavBarComponent({ href, title, current }) {
  return (
    <Link href={href} className={current ? "currentLink" : ""}>
      {title}
      <div className={current ? "currentTabBar" : ""} />
    </Link>
  );
}
