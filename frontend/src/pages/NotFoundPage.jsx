import { Link } from "react-router-dom";
import { Card } from "../components/ui";

function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <Card>
      <h1 className="text-8xl font-semibold">404</h1>
      <h2 className="text-3xl font-medium">Page not found</h2>
      <p className="text-xl font-medium">
        Sorry, we couldn't find what you were looking for.
      </p>
      <Link to="/" className="text-indigo-600 hover:underline">
        Go back home
      </Link>
      </Card>
    </div>
  );
}

export default NotFoundPage;
