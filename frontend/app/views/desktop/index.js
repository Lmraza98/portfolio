import { HomeDesktopLayout, BlogDesktopLayout, AdminDesktopLayout } from './layouts'
import { HomeDesktopTemplate, BlogDesktopTemplate, AdminDesktopTemplate } from './templates'

const HomeDesktopView = (props) => {
    <HomeDesktopLayout>
        <HomeDesktopTemplate>

        </HomeDesktopTemplate>
    </HomeDesktopLayout>
}
const BlogDesktopView = (props) => {
    <BlogDesktopLayout>
        <BlogDesktopTemplate>

        </BlogDesktopTemplate>
    </BlogDesktopLayout>
}

const AdminDesktopView = (props) => {
    <AdminDesktoplayout>
        <AdminDesktopTemplate>

        </AdminDesktopTemplate>
    </AdminDesktoplayout>
}

export { HomeDesktopView, BlogDesktopView, AdminDesktopView }