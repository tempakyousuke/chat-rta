import { useState } from "react";
import Link from "next/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AccordionButtonProps = {
  closeDrawer: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  item: {
    label: string;
    children?: Array<{
      label: string;
      to: string;
    }>;
  };
};

function AccordionButton(props: AccordionButtonProps): JSX.Element {
  const [open, setOpen] = useState(false);
  let parentClass = "parent";
  parentClass += open ? " open" : "";
  const liClass = open ? "close-link" : "open-link";

  return (
    <div className="accordion">
      <div
        className={parentClass}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.item.label}
        <FontAwesomeIcon
          className="w-4 ml-2 fontawesome"
          icon={faChevronDown}
        />
      </div>
      <ul className="submenu">
        {props.item.children.map((value) => {
          return (
            <li className={liClass} key={value.to}>
              <Link href={value.to}>
                <a className="link" onClick={props.closeDrawer}>
                  {value.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
        }

        .accordion .parent {
          cursor: pointer;
          display: block;
          padding: 15px 15px 15px 42px;
          font-size: 1.25rem;
          font-weight: 600;
          border-bottom: 1px solid #ccc;
          position: relative;
          transition: all 0.4s ease;
        }

        .accordion li:last-child .parent {
          border-bottom: 0;
        }

        .accordion .parent :global(.fontawesome) {
          position: absolute;
          top: 1.3rem;
          right: 1.3rem;
          font-size: 18px;
          color: #595959;
          transition: all 0.4s ease;
        }

        .accordion .open :global(.fontawesome) {
          transform: rotate(180deg);
        }

        .submenu li {
          transition: all 0.25s ease;
          overflow: hidden;
        }

        .close-link {
          border-width: 0;
          height: 0;
        }

        .open-link {
          border-bottom: 1px solid #ccc;
          height: 3rem;
        }

        .submenu a {
          display: block;
          text-decoration: none;
          padding: 12px;
          padding-left: 42px;
          transition: all 0.25s ease;
        }

        .submenu a:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
}

export default AccordionButton;
