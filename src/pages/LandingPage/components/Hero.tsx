import { HeroLayout, PitchContainer, StartedSection } from "./Hero.styles"
import Illustration from "./Sandy_Tech-02_Single-04.jpg"
import { Button } from "antd"

export const Hero = () => {
	return (
		<HeroLayout>
			<img src={Illustration}></img>
			<PitchContainer>
				<h1>Bootstrap your infra as fast as you can think</h1>
				<span>The right tools for your company to flourish</span>
				<StartedSection>
					<Button type="dashed">Get started</Button>
					<span>Build your infrastructure in minutes</span>
				</StartedSection>
			</PitchContainer>
		</HeroLayout>
	)
}
