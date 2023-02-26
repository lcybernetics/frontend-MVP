import { Avatar, Badge } from "antd"
import { BellOutlined } from "@ant-design/icons"
import { IdentitySpaceWrapper, UserDataSection } from "./IdentitySpace.styles"
import { UserOutlined } from "@ant-design/icons"
import { useAtom } from "jotai"
import { notificationCountAtom, userDetailsAtom } from "../../state/userState"

export const IdentitySpace = () => {
	const [user] = useAtom(userDetailsAtom)
	const [notificationCount] = useAtom(notificationCountAtom)

	return (
		<IdentitySpaceWrapper>
			<Badge count={notificationCount} offset={[-5, 5]}>
				<BellOutlined />
			</Badge>
			<UserDataSection>
				<p>{`${user.firstName} ${user.lastName}`}</p>
				<Avatar size="large" icon={<UserOutlined />} />
			</UserDataSection>
		</IdentitySpaceWrapper>
	)
}
