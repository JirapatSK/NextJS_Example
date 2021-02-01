import React from "react";
import { useRecoilState } from "recoil";
import Dashboard from "../../components/Dashboard";
import { exRecoil } from "../../components/RecoilState";

const Home = (props) => {
  const [ex, setEx] = useRecoilState(exRecoil);

  React.useEffect(() => {
    setEx("new recoil value");
  }, []);

  return <Dashboard {...props}>{ex}</Dashboard>;
};

export default Home;
