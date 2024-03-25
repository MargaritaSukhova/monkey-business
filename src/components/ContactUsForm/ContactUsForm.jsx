import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validtion";
import { Button, FormStyled } from "./ContactUsForm.styled";
import ContactUsInput from "../ContactUsInput/ContactUsInput";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ContactUsForm = () => {
	const [buttonText, setButtonText] = useState("MINT");
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {
		try {
			setButtonText("MINTED");
			Notify.success(
				"Congratulations! Your form was submited",

				() => {
					setTimeout(() => {
						setButtonText("MINT");
					}, 3000);
				}
			);
			reset();
		} catch (error) {
			setButtonText("ERROR");
		}
	};

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<ContactUsInput
				name="discord"
				type="text"
				placeholder={"@username"}
				register={register}
				errors={errors}
			/>
			<ContactUsInput
				name="metamask"
				type="text"
				placeholder={"Wallet address"}
				register={register}
				errors={errors}
			/>
			<Button type="submit">{buttonText}</Button>
		</FormStyled>
	);
};

export default ContactUsForm;
