import { HomeTabletLayout, BlogTabletLayout, AdminTabletLayout } from './layouts'
import { HomeTabletTemplate, BlogTabletTemplate, AdminTabletTemplate } from './templates'

const HomeTabletView = (props) => {
    <HomeTabletLayout>
        <HomeTabletTemplate>

        </HomeTabletTemplate>
    </HomeTabletLayout>
}
const BlogTabletView = (props) => {
    <BlogTabletLayout>
        <BlogTabletTemplate>

        </BlogTabletTemplate>
    </BlogTabletLayout>
}

const AdminTabletView = (props) => {
    <AdminTabletlayout>
        <AdminTabletTemplate>

        </AdminTabletTemplate>
    </AdminTabletlayout>
}

export { HomeTabletView, BlogTabletView, AdminTabletView }