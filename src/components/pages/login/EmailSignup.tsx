import React from "react";
import HiInput from "components/Form/HiInput";
import HiButton from "components/Button/HiButton";
import { fireauth } from "utils/firebase";
import { toast } from "react-toastify";

type EmailSignupState = {
  email: string;
  password: string;
};

class EmailSignup extends React.Component<{}, EmailSignupState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  async signupByEmail(event: React.MouseEvent): Promise<void> {
    event.preventDefault();
    try {
      await fireauth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
    } catch (e) {
      switch (e.code) {
        case "auth/email-already-in-use": {
          toast.error("既にこのメールアドレスは使用されています。");
          break;
        }
        case "auth/weak-password": {
          toast.error("パスワードは6文字以上入力してください。");
          break;
        }
        default: {
          toast.error("アカウント作成に失敗しました。");
        }
      }
      throw new Error(e);
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
          <HiButton handleClick={this.signupByEmail.bind(this)}>
            新規登録
          </HiButton>
        </div>
      </form>
    );
  }
}

export default EmailSignup;
