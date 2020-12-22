import Theme from "../components/theme";
import React from "react";
import { useRouter } from "next/router";

const Index = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/home");
  }, []);

  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Index;
