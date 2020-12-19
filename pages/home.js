import Theme from "../components/theme";
import TeacherGuard from "../guards/guard";

const Home = (props) => {
  return <Theme {...props}>Home Page</Theme>;
};

export default TeacherGuard(Home);
