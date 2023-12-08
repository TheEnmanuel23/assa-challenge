import { Link } from "react-router-dom";

export const GoBackButton = () => (
  <Link to="/" className="p-2 bg-gray-200 rounded-md">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"
      />
    </svg>
  </Link>
);
