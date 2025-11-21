import { Counter } from "./assets/components/Counter";
import { FormsPage } from "./assets/components/FormsPage";
import { LoginPage } from "./assets/components/loginPage";
import { UserPage } from "./assets/components/UserPage";
import { AuthProvider } from "./context/AuthContext";
import { BasicFunciones } from "./Typescritp/BasicFunciones";
// import { BasicTypes } from "./Typescritp/BasicTypes";
// import { ObjectLiterals } from "./Typescritp/ObjectLiterals";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-3xl font-bold underline">React + Ts</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals></ObjectLiterals> */}
        {/* <BasicFunciones /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UserPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
