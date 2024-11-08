import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <h1 className="text-center text-capitalize text-warning mt-[20px]">
      this page is not found ....!
    </h1>
  );
};

export default NotFound;
