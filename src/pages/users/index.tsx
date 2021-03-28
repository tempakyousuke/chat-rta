import React from "react";
import { AuthContext } from "context/auth";
import { withRouter, NextRouter } from "next/router";
import UserList from "components/pages/users/UserList";

interface WithRouterProps {
  router: NextRouter;
}

type LoginState = {
  activeTab: string;
};

class Users extends React.Component<WithRouterProps, LoginState> {
  static contextType = AuthContext;

  constructor(props: WithRouterProps) {
    super(props);
    this.state = {
      activeTab: "login",
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  get signupClass(): string {
    if (this.state.activeTab === "signup") {
      return "px-6 py-2 bg-white rounded-t-lg";
    } else {
      return "px-6 py-2 text-gray-500 bg-white bg-gray-200 rounded-t-lg";
    }
  }

  render(): JSX.Element {
    return (
      <div className="max-w-2xl mx-auto mt-5">
        <div className="p-6 bg-white shadow-2xl rounded-xl">
          <UserList/>
        </div>
      </div>
    );
  }
}

export default withRouter(Users);
