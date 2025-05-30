import { useState } from "react";
import styles from "../pages/AboutUs/AboutUsPage.module.css";

type inputType = {
	name: string;
	position: string;
	phone: string;
	cv: string;
	email: string;
};

const WorkApplicationForm = () => {
	const [inputValues, setInputValues] = useState<inputType>({
		name: "",
		position: "Шанкер",
		phone: "",
		cv: "",
		email: "",
	});

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

		console.log(inputValues);
	};

	return (
		<div id="workApplication" className="bg-black py-5">
			<div className="text-center">
				<p className="text-white mb-0">Котур Вработува</p>
				<img src="/images/footer/spoon.png" alt="spoon" />
				<h2 style={{ color: "#C0C6BA" }}>Аплицирај за Работа</h2>
			</div>
			<form className="p-2" onSubmit={submitHandler}>
				<div className="row m-0 text-white">
					<div className="col-md-6 mb-4">
						<label htmlFor="name" className="mb-1">
							Име и презиме
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							value={inputValues.name}
							onChange={handleChange}
							placeholder="Петко Петкоски"
							className={`${styles.customInput} bg-black  border border-white form-control`}
						/>
					</div>
					<div className="col-md-6 mb-4">
						<label htmlFor="position" className="mb-1">
							Позиција
						</label>
						<select
							id="position"
							name="position"
							onChange={handleChange}
							required
							value={inputValues.position}
							className={`${styles.selectColor} border border-white bg-black form-select`}
						>
							<option>Шанкер</option>
						</select>
					</div>
					<div className="col-md-6 mb-4">
						<label htmlFor="phone" className="mb-1">
							Телефонски број
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							required
							onChange={handleChange}
							value={inputValues.phone}
							placeholder="075 555 555"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
					<div className="col-md-6 mb-4">
						<label htmlFor="cv" className="mb-1">
							Прикачи линк од CV
						</label>
						<input
							type="text"
							id="cv"
							name="cv"
							required
							onChange={handleChange}
							value={inputValues.cv}
							placeholder="Lorem ipsum"
							className={`${styles.customInput} bg-black border border-white form-control`}
						/>
					</div>
					<div className=" mb-4">
						<label htmlFor="email" className="mb-1">
							Емаил адреса
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							onChange={handleChange}
							value={inputValues.email}
							placeholder="petko.petkoski@gmail.com"
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

export default WorkApplicationForm;
