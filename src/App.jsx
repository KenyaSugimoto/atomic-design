import { BrowserRouter } from "react-router-dom";
import { SearchInput } from "../components/molecules/SearchInput";
import { UserCard } from "../components/organisms/user/UserCard";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/xgTMSz6kegE",
    name: "けんや",
    mail: "test@ritsumei.ac.jp",
    phone: "0977-23-1234"
  };

  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
