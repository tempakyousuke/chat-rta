import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  item: {
    label: string;
    to?: string;
    loggedIn?: boolean;
  };
  closeDrawer: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>
  ) => void;
};

function NavLink(props: NavLinkProps): JSX.Element {
  const router = useRouter();
  const matchRouteClass =
    "link " + (router.pathname === props.item.to ? "text-gray-900" : "");
  return (
    <div>
      <Link href={props.item.to}>
        <div className={matchRouteClass} onClick={props.closeDrawer}>
          {props.item.label}
        </div>
      </Link>
      <style jsx>{`
        .link {
          padding: 1rem;
          font-size: 1.25rem;
          font-weight: 600;
          border-bottom: 1px solid #ccc;
        }

        .link:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
}

export default NavLink;
