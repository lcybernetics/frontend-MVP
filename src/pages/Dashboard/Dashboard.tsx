import { IdentitySpace, SearchSpace, Sidebar } from "../../components"
import {
	DashboardData,
	DashboardLayout,
	MiddleSection,
	RightSection,
} from "./Dashboard.styles"
import { ScaffoldsSpace } from "./components/ScaffoldSpace"

export const Dashboard = () => {
	return (
		<DashboardLayout>
			<Sidebar />
			<DashboardData>
				<MiddleSection>
					<SearchSpace />
					<ScaffoldsSpace />
				</MiddleSection>
				<RightSection>
					<IdentitySpace />
				</RightSection>
			</DashboardData>
		</DashboardLayout>
	)
}
