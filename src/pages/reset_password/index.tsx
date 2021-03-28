import { useState } from "react";
import HiCard from "components/Card/HiCard";
import HiInput from "components/Form/HiInput";
import HiButton from "components/Button/HiButton";
import { toast } from "react-toastify";
import { fireauth } from "utils/firebase";

function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState("");

  const submit = (event: React.MouseEvent) => {
    event.preventDefault();
    fireauth
      .sendPasswordResetEmail(email)
      .then(() => {
        toast.info("パスワード再設定のメールを送りました");
      })
      .catch(function (error) {
        toast.error(error.message);
      });
  };

  return (
    <HiCard className="max-w-2xl mx-auto mt-5" title="パスワードリセット">
      <span>メールアドレスにパスワード再設定用のリンクを送信します。</span>
      <form className="mt-5">
        <HiInput
          value={email}
          handleChange={setEmail}
          placeholder="メールアドレスを入力してください"
        />
        <div className="w-10/12 mx-auto mt-5">
          <HiButton handleClick={submit}>送信</HiButton>
        </div>
      </form>
    </HiCard>
  );
}

export default ResetPassword;
