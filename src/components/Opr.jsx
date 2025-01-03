import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postOperation } from "../store/actions/userAction";

export function Opr() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postOperation());
  }, []);
}
