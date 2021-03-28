import React from "react";
import { firestore } from "utils/firebase";
import { toast } from "react-toastify";

type UserListState = {
  list: any[];
};

class UserList extends React.Component<{}, UserListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: []
    }
  }

  getData = async () => {
    const ref = firestore.collection('users');
    const snapshots = await ref.get();
    const docs = snapshots.docs.map(doc => doc.data());
    this.setState({ list: docs, });
  }

  componentDidMount = async () => {
    await this.getData();
  }

  componentWillUnmount = () => {
  }

  onCollectionUpdate = (querySnapshot) => {
    this.getData();
  }

  ItemList(props) {
    const users = props.users;
    const listItems = users.map((user) =>
      <li>{user.name}</li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>USER LIST</h1>
        <this.ItemList users={this.state.list}/>
      </div>
    );
  }
}

export default UserList;