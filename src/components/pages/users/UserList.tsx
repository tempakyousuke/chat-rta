import React, { useContext } from "react";
import { firestore } from "utils/firebase";
import { toast } from "react-toastify";
import { UserItem } from "../../Users/UserItem"
import { AuthContext } from "context/auth";

type UserListState = {
  list: any[];
  talking_user_ids: Set<String>;
};

class UserList extends React.Component<{}, UserListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
      talking_user_ids: new Set(),
    };
  }

  static contextType = AuthContext;

  getList = async () => {
    const ref = firestore.collection('users');
    const snapshots = await ref.get();
    const docs = snapshots.docs.map(doc => {
      return {id: doc.id, ...doc.data()}
    });
    this.setState({ list: docs, });
  }

  getTalkingUsers = async() => {
    const ref = firestore.collection("conversations");
    const currentUser: string = this.context.currentUser;
    return await ref
      .where("user_ids", "array-contains", currentUser + "")
      .get()
      .then((querySnapshot) => {
        const talking_user_ids = new Set<String>();
        querySnapshot.forEach((doc) => {
          talking_user_ids.add(
            doc.data().user_ids.find((user_id) => {
              return user_id != currentUser;
            })
          );
        });
        this.setState({ talking_user_ids });
      })
      .catch(function (error) {
        console.log("Could not get talking user ids.")
        console.log(error.message);
      });
  };

  componentDidMount = async () => {
    await this.getList();
    await this.getTalkingUsers();
  }

  componentWillUnmount = () => {
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>USER LIST</h1>
        {this.state.list.map((user) => (
          <UserItem
            key={user.id}
            user_name={user.name}
            is_talking={this.state.talking_user_ids.has(user.id)}
          ></UserItem>
        ))}
      </div>
    );
  }
}
export default UserList;
