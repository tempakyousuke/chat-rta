import menus from "./menus";
import AccordionButton from "./accordionButton";
import NavLink from "./navLink";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { fireauth } from "utils/firebase";
import { AuthContext } from "context/auth";

type MenuProps = {
  closeDrawer: (
    event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};

function AccordionMenu(props: MenuProps): JSX.Element {
  const currentUser = useContext(AuthContext);

  const filteredMenu = menus.filter((menu) => {
    if (menu.loggedIn === true) {
      if (currentUser.currentUser) {
        return true;
      }
      return false;
    }
    if (menu.loggedIn === false) {
      if (!currentUser.currentUser) {
        return true;
      }
      return false;
    }
    return true;
  });

  const navi = filteredMenu.map((menu) => {
    if (menu.children) {
      return (
        <AccordionButton
          item={menu}
          closeDrawer={props.closeDrawer}
          key={menu.label}
        />
      );
    } else {
      return (
        <NavLink item={menu} closeDrawer={props.closeDrawer} key={menu.to} />
      );
    }
  });

  const router = useRouter();

  const logout = async () => {
    await fireauth.signOut();
    router.push("/");
    props.closeDrawer();
  };

  return (
    <div className="py-2">
      <div className="p-4 mt-5 text-xl font-bold">王様のかくれんぼ</div>
      {navi}
      {currentUser.currentUser ? (
        <div
          className="p-4 text-xl md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          onClick={logout}
        >
          ログアウト
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AccordionMenu;
