import styled from "@emotion/styled";

export const StyledContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	padding-left: 72px;
	padding-right: 72px;
	max-width: 480px;

	@media (min-width: 768px) {
		max-width: 768px;
		padding-left: 88px;
		padding-right: 88px;
	}

	@media (min-width: 1280px) {
		max-width: 1440px;
		padding-left: 204px;
		padding-right: 204px;
	}
`;
