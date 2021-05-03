import { SearchInput } from "../components/molecules/SearchInput";
import { UserCard } from "../components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/xgTMSz6kegE",
    name: "けんや",
    mail: "test@ritsumei.ac.jp",
    phone: "0977-23-1234"
  };

  return (
    <div className="App">
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
