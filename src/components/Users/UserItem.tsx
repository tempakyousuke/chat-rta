import React, { useContext } from "react";
import { firestore } from "utils/firebase";
import { AuthContext } from "context/auth";
import { faDove } from "@fortawesome/free-solid-svg-icons";

type UserItemProps = {
  key: string;
  user_name: string;
  is_talking: boolean;
};

export const UserItem: React.FC<UserItemProps> = (props: UserItemProps) => {
  return (
    <div key={props.key}>
      <div className="max-w-2xl mx-auto mt-5">
        <div className="p-6 bg-white shadow-2xl rounded-xl">
          {props.user_name}
          {props.is_talking} {/* TODO!! */}
        </div>
      </div>
    </div>
  );
};
