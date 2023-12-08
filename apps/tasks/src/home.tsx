import { Button } from "@repo/ui";
import { GoBackButton } from "./components/go-back-button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1 className="text-xl">Home</h1>
        <Button asChild>
          <Link to="/tasks">Tasks</Link>
        </Button>
        <Button asChild>
          <Link to="/list">List</Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
