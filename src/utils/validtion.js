import * as yup from "yup";

const discordRegexp = /^@[a-zA-Z0-9_.]{1,31}$/;
const metamaskRegexp = /^1x[a-zA-Z0-9]{19}$/;

export const schema = yup.object().shape({
	discord: yup
		.string()
		.required("Field is required")
		.min(3, "Minimum 3 characters")
		.max(32, "Maximum 32 characters")
		.matches(discordRegexp, "Wrong discord"),
	metamask: yup
		.string()
		.required("Field is required")
		.max(21, "Maximum 21 characters")
		.matches(metamaskRegexp, "Wrong address"),
});
