import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

export function Request() {
  const user = {
    id: Math.floor(Math.random() * 10),
    name: "Ali Umur Kucur",
    year: 1997,
    color: "#30D5C8",
    pantone_value: "",
  };

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", user)
      .then((response) => {
        console.log(response.data);
        toast.success(
          "Ali Umur Kucur CV sitesine hoş geldiniz, POST işlemi başarılı."
        );
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      }, []);
  });
}
