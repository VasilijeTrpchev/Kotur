import { useState } from "react";
import styles from "../pages/AboutUs/AboutUsPage.module.css";

const TableReservationForm = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    date: "",
    time: "",
    email: "",
    event: "",
    message: "",
  });

  async function postData(url: string, data: unknown) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postData(
      "https://b508-46-217-233-171.ngrok-free.app/api/cocktail-bar-reservations",
      inputValues
    );

    console.log(inputValues);
    console.log(postData);
  };
  return (
    <div className="bg-black py-5">
      <div className="text-center">
        <p className="text-white mb-0">Резервации</p>
        <img src="/images/footer/spoon.png" alt="spoon" />
        <h2 style={{ color: "#C0C6BA" }}>Резервирај Коктел Шанк</h2>
      </div>
      <form className="p-2" onSubmit={submitHandler}>
        <div className="row m-0 text-white">
          <div className="col-md-4 mb-4">
            <label htmlFor="name" className="mb-1">
              Име и презиме
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValues.name}
              onChange={handleChange}
              placeholder="Петко Петкоски"
              className={`${styles.customInput} bg-black  border border-white form-control`}
            />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="date" className="mb-1">
              Датум
            </label>
            <input
              onChange={handleChange}
              value={inputValues.date}
              type="date"
              id="date"
              name="date"
              placeholder="Петко Петкоски"
              className={`${styles.customInput} bg-black border border-white form-control`}
            />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="time" className="mb-1">
              Час
            </label>
            <input
              onChange={handleChange}
              value={inputValues.time}
              type="time"
              id="time"
              name="time"
              placeholder="Петко Петкоски"
              className={`${styles.customInput} bg-black border border-white form-control`}
            />
          </div>

          <div className="col-md-4 mb-4">
            <label htmlFor="email" className="mb-1">
              Емаил адреса
            </label>
            <input
              onChange={handleChange}
              value={inputValues.email}
              type="email"
              id="email"
              name="email"
              placeholder="petko.petkoski@gmail.com"
              className={`${styles.customInput} bg-black border border-white form-control`}
            />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="event" className="mb-1">
              Тип на настан
            </label>
            <input
              onChange={handleChange}
              value={inputValues.event}
              type="text"
              id="event"
              name="event"
              placeholder="Lorem ipsum"
              className={`${styles.customInput} bg-black border border-white form-control`}
            />
          </div>
          <div className="col-md-4 mb-4">
            <label htmlFor="message" className="mb-1">
              Порака
            </label>
            <input
              onChange={handleChange}
              value={inputValues.message}
              type="text"
              id="message"
              name="message"
              placeholder="Lorem ipsum"
              className={`${styles.customInput} bg-black border border-white form-control`}
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn px-5 fw-semibold mt-2"
            style={{ backgroundColor: "#C0C6BA" }}
          >
            Испрати
          </button>
        </div>
      </form>
    </div>
  );
};

export default TableReservationForm;
