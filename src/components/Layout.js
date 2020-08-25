import Header from "./Header"

/**
 * Fragment là một common pattern được giới thiệu kể từ khi React 16 ra đời. 
 * Nó cho phép bạn return nhiều element từ một component mà không làm sinh ra những DOM element ko cần thiết.
 */
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}

export default Layout