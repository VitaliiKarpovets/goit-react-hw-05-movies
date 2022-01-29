import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ButtonBack.styled";

export default function ButtonBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () =>
    navigate(location?.state?.from ?? "/", { replace: true });

  return (
    <Button type="button" onClick={onClick}>
      Go back
    </Button>
  );
}
