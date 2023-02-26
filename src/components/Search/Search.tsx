import { SearchWrapper } from "./Search.styles"
import { Input } from "antd"

const { Search } = Input

export const SearchSpace = () => {
	const onSearch = (value: string) => console.log(value)
	return (
		<SearchWrapper>
			<Search placeholder="Search Projects" onSearch={onSearch} />
		</SearchWrapper>
	)
}
