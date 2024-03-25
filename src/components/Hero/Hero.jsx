import heroSml from "../../assets/images/hero/hero-sml.png";
import heroSml2x from "../../assets/images/hero/hero-sml@2x.png";
import heroMed from "../../assets/images/hero/hero-med.png";
import heroMed2x from "../../assets/images/hero/hero-med@2x.png";
import heroLrg from "../../assets/images/hero/hero-lrg.png";
import heroLrg2x from "../../assets/images/hero/hero-lrg@2x-2.png";
import {
	HeroSection,
	HeroContainer,
	HeroWrapper,
	TitleContainer,
	HeroText,
	HeroTextWithIndent,
	HeroTitle,
	HeroPicture,
	HeroButton,
	HeroButtonText,
	HeroPargaraph,
} from "./Hero.styled";

const Hero = () => {


	return (
		<HeroSection>
			<HeroContainer>
				<HeroWrapper>
					<TitleContainer>
						<HeroText>diD yOu seE iT ?</HeroText>
						<HeroTitle>
							YACHT <span>APES</span>
						</HeroTitle>
						<HeroTextWithIndent>Apes aRe eveRywhere</HeroTextWithIndent>
					</TitleContainer>
					<HeroPicture>
						<source
							srcSet={`${heroSml} 1x, ${heroSml2x} 2x`}
							media="(max-width: 767px)"
							type="image/jpeg"
						/>
						<source
							srcSet={`${heroMed} 1x, ${heroMed2x} 2x`}
							media="(min-width: 768px) and (max-width: 1279px)"
							type="image/jpeg"
						/>
						<source
							srcSet={`${heroLrg} 1x, ${heroLrg2x} 2x`}
							media="(min-width: 1280px)"
							type="image/jpeg"
						/>
						<img src={heroSml} alt="Hero Ape image" />
					</HeroPicture>

					<HeroButton type="button">
						<HeroButtonText href="#contactUs">MEET APES</HeroButtonText>
					</HeroButton>
					<HeroPargaraph>
						Yacht Ape is a collection of unique digital apes that you can own in
						NFT format
					</HeroPargaraph>
				</HeroWrapper>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero;
