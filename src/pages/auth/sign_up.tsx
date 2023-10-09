import { useRouter } from "next/router";
import useInput from "../../utils/useInput";
import APINew from "../../utils/Api";
import { useState } from "react";
import Cookies from "js-cookie";
import ButtonUniversal from "../../components/buton/ButtoUniversal";
import FormInpurLabel from "../../components/input/FormInputLabel";
import {
  GoogleAuthProvider,
  getAuth,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";
import { googleProvider } from "../../config/firebase";

function PageSignUp() {
  const router = useRouter();
  const [input, handleInput] = useInput({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  async function btnLoginGoogle2() {
    const auth = getAuth();
    // await auth.signOut();
    signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        try {
          const idToken = await getIdToken(auth?.currentUser, true);
          // setTimeout(() => {
          APIGoogle(idToken);
          // }, 7000);
          const credential = GoogleAuthProvider.credentialFromResult(res);
          console.log(credential.idToken, idToken);
        } catch {
          console.log("token firebase ", res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function APIGoogle(idToken) {
    await APINew.post("/auth/google", { id_token: idToken })
      .then((res) => {
        Cookies.set("token", res.access_token);
        router.push("/page2");
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  }

  function btnSignUp() {
    APINew.post("/auth/signup", {
      name: input.name,
      email: input.email,
      password: input.password,
    })
      .then((res) => {
        Cookies.set("token", res.access_token);
        router.push("/page2");
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        setErrors(err?.errors);
        console.log("====================================");
      });
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-[#121212] shadow-2xl rounded-lg w-1/3 bg-opacity-20 p-10 gap-2">
        <FormInpurLabel
          label="Name"
          value={input.name}
          onChange={handleInput("name")}
          required={true}
          error={errors?.name}
        />
        <FormInpurLabel
          label="Email"
          type="email"
          value={input.email}
          onChange={handleInput("email")}
          required={true}
          error={errors?.email}
        />
        <FormInpurLabel
          label="Password"
          type="password"
          onChange={handleInput("password")}
          value={input.password}
          error={errors?.password}
          required
        />

        <ButtonUniversal
          onClick={() => btnSignUp()}
          label="Sign Up"
          type="block"
        />
        <ButtonUniversal
          onClick={() => btnLoginGoogle2()}
          label="Sign In With Google"
          type="outline"
        />
        <div id="gap" style={{ height: "32px" }} />
        <div className="flex justify-center">
          {/* <a href="./sign_up">Sign Up Now</a> */}
          <a href="./sign_in">Sign In Now</a>
        </div>
      </div>
    </div>
  );
}

export default PageSignUp;
