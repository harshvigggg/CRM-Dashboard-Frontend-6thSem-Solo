import { AuthPage } from "@refinedev/antd";

export const Register = () => {
  return <AuthPage type="register" title={
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", fontFamily: "Helvetica" }}>
      <img src="/logoo.png" alt="Logo" style={{ height: "24px", width: "24px" }} />
      CRMbyHarsh
    </div>
  } />;
};
