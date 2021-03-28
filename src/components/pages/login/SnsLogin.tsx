import { faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { fireauth } from "utils/firebase";
import { toast } from "react-toastify";

function SnsLogin(): JSX.Element {
  const twitterLogin = async () => {
    try {
      const provider = new firebase.auth.TwitterAuthProvider();
      await fireauth.signInWithRedirect(provider);
    } catch (e) {
      toast.error(e.message);
    }
  };
  const googleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await fireauth.signInWithRedirect(provider);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="p-6">
      <button
        className="w-full p-1 text-white rounded bg-lightBlue-400"
        onClick={twitterLogin}
      >
        <FontAwesomeIcon className="w-4 mr-2 fontawesome" icon={faTwitter} />
        <span>Twitter</span>
      </button>
      <button
        className="w-full p-1 mt-5 text-red-500 bg-white border border-red-500 rounded"
        onClick={googleLogin}
      >
        <FontAwesomeIcon className="w-4 mr-2 fontawesome" icon={faGoogle} />
        <span>Google</span>
      </button>
      <style jsx>{`
        .bg-twitter {
          background-color
        }
      `}</style>
    </div>
  );
}

export default SnsLogin;
