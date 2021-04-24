import { HomeLayout, BlogLayout, AdminLayout } from './components/layouts'
import { HomeTemplate, BlogTemplate, AdminTemplate } from './components/templates'

function HomeTabletView() {
    return (
        <HomeLayout>
            <HomeTemplate>
            </HomeTemplate>
        </HomeLayout>
    )
}
function BlogTabletView() {
    return (
        <BlogLayout>
            <BlogTemplate>
            </BlogTemplate>
        </BlogLayout>
    )
}

function AdminTabletView(){
    return (
        <AdminLayout>
            <AdminTemplate>
            </AdminTemplate>
        </AdminLayout>
    )
    
}

export { HomeTabletView, BlogTabletView, AdminTabletView }