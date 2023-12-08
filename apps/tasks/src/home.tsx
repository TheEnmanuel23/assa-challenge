import { Button, Separator } from "@repo/ui";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full">
      <h1 className="text-xl font-semibold text-center">Home</h1>
      <Separator className="mt-4" />
      <div className="flex flex-col gap-4 h-[calc(100%-90px)] justify-center">
        <Button asChild>
          <Link to="/tasks">Tasks</Link>
        </Button>
        <Button asChild>
          <Link to="/list">List</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
