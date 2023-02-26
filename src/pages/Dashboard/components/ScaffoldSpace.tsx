import { AppButton, ScaffoldTile } from "../../../components"
import {
	DashboardTileSection,
	MainSectionWrapper,
	TileSectionHeader,
} from "./ScaffoldSpace.styles"

export const ScaffoldsSpace = () => {
	return (
		<MainSectionWrapper>
			<DashboardTileSection>
				<TileSectionHeader>
					<h5>Recently visited:</h5>
					<AppButton $fontSize={1.1}>Create Scaffold</AppButton>
				</TileSectionHeader>
				<div>
					<ScaffoldTile active={true} />
					<ScaffoldTile active={false} />
					<ScaffoldTile active={false} />
					<ScaffoldTile active={true} />
				</div>
			</DashboardTileSection>
		</MainSectionWrapper>
	)
}
