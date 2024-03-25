import Cross from "../../assets/icons/cross.svg"
import { BanerContainer, BanerStyled, BanerItem, Icon } from "./Baner.styled";

const Baner = () => {
	return (
		<BanerContainer>
			<BanerStyled>
				<BanerItem>
					<p>Destroy stereotypes</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
				<BanerItem>
					<p>HAVE NO LIMITS</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
				<BanerItem>
					<p>Break rules</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
				<BanerItem>
					<p>Destroy stereotypes</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
				<BanerItem>
					<p>HAVE NO LIMITS</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
				<BanerItem>
					<p>Break rules</p>
					<Icon src={Cross} alt="Cross icon" />
				</BanerItem>
			</BanerStyled>
		</BanerContainer>
	);
};

export default Baner;
