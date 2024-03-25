import Discord from "../../assets/icons/discord-colored.svg";
import Metamask from "../../assets/icons/metamask.svg";
import { InputContainer, Icon, Input, Error } from "./ContactUsInput.styled";

const ContactUsInput = ({ name, placeholder, type, register, errors }) => {
  return (
		<InputContainer>
			{name === "discord" ? (
				<Icon>
					<img src={Discord} alt="Discord icon" style={{fill: "#5a65f2"}}/>
				</Icon>
			) : (
				<Icon>
					<img src={Metamask} alt="Metamask icon" />
				</Icon>
			)}
			<Input
				type={type}
				placeholder={placeholder}
				{...register(name)}
				$errors={!!errors[name]}
			/>
			<Error>{errors[name]?.message}</Error>
		</InputContainer>
	);
};

export default ContactUsInput;
