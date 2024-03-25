import styled from "@emotion/styled";


export const MindMapGrid = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 284px);
	gap: 24px;
	width: 592px;
	margin: 0 auto;

	@media (min-width: 1280px) {
		grid-template-columns: repeat(auto-fill, 504px);
		width: 1032px;
	}
`;
