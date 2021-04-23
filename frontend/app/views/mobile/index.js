import { HomeMobileLayout, BlogMobileLayout, AdminMobileLayout } from './layouts'
import { HomeMobileTemplate, BlogMobileTemplate, AdminMobileTemplate } from './templates'

const HomeMobileView = (props) => {
    <HomeMobileLayout>
        <HomeMobileTemplate>

        </HomeMobileTemplate>
    </HomeMobileLayout>
}
const BlogMobileView = (props) => {
    <BlogMobileLayout>
        <BlogMobileTemplate>

        </BlogMobileTemplate>
    </BlogMobileLayout>
}

const AdminMobileView = (props) => {
    <AdminMobilelayout>
        <AdminMobileTemplate>

        </AdminMobileTemplate>
    </AdminMobilelayout>
}

export { HomeMobileView, BlogMobileView, AdminMobileView }