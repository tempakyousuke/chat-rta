import AccordionMenu from "./accordionMenu";

type DrawerProps = {
  open: boolean;
  close: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>
  ) => void;
};

function Drawer(props: DrawerProps): JSX.Element {
  let contentClass = "content";
  contentClass += props.open ? " open" : "";

  let overlayClass = "overlay";
  if (props.open) {
    overlayClass += " opacity-50";
  } else {
    overlayClass += " hidden opacity-0";
  }

  return (
    <div className="relative">
      <div className={contentClass}>
        <AccordionMenu closeDrawer={props.close} />
      </div>
      <div className={overlayClass} onClick={props.close} />
      <style jsx>{`
        .content {
          overflow: auto;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          width: 90%;
          max-width: 330px;
          height: 100%;
          background: #fff;
          transition: 0.3s ease-in-out;
          transform: translateX(-105%);
        }

        .open {
          transform: translateX(0%);
          box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
        }

        .overlay {
          position: fixed;
          z-index: 99;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          transition: 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Drawer;
