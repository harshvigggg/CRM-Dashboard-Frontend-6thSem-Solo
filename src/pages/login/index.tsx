import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", fontFamily: "Helvetica" }}>
          <img src="/logoo.png" alt="Logo" style={{ height: "24px", width: "24px" }} />
          CRMbyHarsh
        </div>
      }
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
