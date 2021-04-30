import { HomeLayout, BlogLayout, AdminLayout } from './components/layouts'
import { HomeTemplate, BlogTemplate, AdminTemplate } from './components/templates'

export function HomeDesktopView() {
    return (
        <HomeLayout>
            <HomeTemplate/>
        </HomeLayout>
    )
}
export function BlogDesktopView() {
    return (
        <BlogLayout>
            <BlogTemplate/>
        </BlogLayout>
    )
}

export function AdminDesktopView(){
    return (
        <AdminLayout>
            <AdminTemplate/>
        </AdminLayout>
    )
    
}