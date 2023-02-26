import { Progress, Statistic } from "antd"
import {
	DataSection,
	StatisticsWrapper,
	StatusBG,
	TileContainer,
} from "./ScaffoldTile.styles"

type ScaffoldTile = {
	active: boolean
}

export const ScaffoldTile = ({ active }: ScaffoldTile) => {
	return (
		<TileContainer>
			<StatusBG $active={active} />
			<DataSection>
				<span>Statistics:</span>
				<StatisticsWrapper>
					<Statistic title="Merged" value={93} suffix="/ 100" />
					<Progress type="circle" percent={30} width={80} />
					<h5>Status: {active ? "active" : "inactive"}</h5>
				</StatisticsWrapper>
			</DataSection>
		</TileContainer>
	)
}
