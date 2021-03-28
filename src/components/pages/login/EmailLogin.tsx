import React from "react";
import HiInput from "components/Form/HiInput";
import HiButton from "components/Button/HiButton";
import { fireauth } from "utils/firebase";
import { toast } from "react-toastify";
import Link from "next/link";

type EmailLoginState = {
  email: string;
  password: string;
};

class EmailLogin extends React.Component<{}, EmailLoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  async loginByEmail(event: React.MouseEvent): Promise<void> {
    event.preventDefault();
    try {
      await fireauth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  }

  render(): JSX.Element {
    return (
      <form>
        <div className="mt-4">
          <HiInput
            label="メールアドレス"
            labelCols={3}
            value={this.state.email}
            handleChange={(value: string) => {
              this.setState({ email: value });
            }}
            placeholder="メールアドレス"
          />
        </div>
        <div className="mt-4">
          <HiInput
            label="パスワード"
            labelCols={3}
            value={this.state.password}
            handleChange={(value: string) => {
              this.setState({ password: value });
            }}
            type="password"
            placeholder="パスワード"
          />
        </div>
        <div className="w-10/12 mx-auto mt-4 md:w-6/12">
          <HiButton handleClick={this.loginByEmail.bind(this)}>
            ログイン
          </HiButton>
        </div>
        <div className="mt-5 text-right text-lime-700">
          <Link href="/reset_password/">パスワードを忘れた方はこちら</Link>
        </div>
      </form>
    );
  }
}

export default EmailLogin;
