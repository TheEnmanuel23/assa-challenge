import { Button } from "@repo/ui";
import { GoBackButton } from "./components/go-back-button";

function Home() {
  return (
    <>
      <div>
        <h1 className="text-xl">Home</h1>
        <GoBackButton />
        <Button asChild>
          <a href="/tasks">Tasks</a>
        </Button>
        <Button asChild>
          <a href="/list">List</a>
        </Button>
      </div>
    </>
  );
}

export default Home;
