import { HomeLayout, BlogLayout, AdminLayout } from './components/layouts'
import { HomeTemplate, BlogTemplate, AdminTemplate } from './components/templates'

function HomeMobileView() {
    return (
        <HomeLayout>
            <HomeTemplate>
            </HomeTemplate>
        </HomeLayout>
    )
}
function BlogMobileView() {
    return (
        <BlogLayout>
            <BlogTemplate>
            </BlogTemplate>
        </BlogLayout>
    )
}

function AdminMobileView(){
    return (
        <AdminLayout>
            <AdminTemplate>
            </AdminTemplate>
        </AdminLayout>
    )
    
}

export { HomeMobileView, BlogMobileView, AdminMobileView }