import { Routes } from '@angular/router';
import { Dashboard } from './Pages/Admin/dashboard/dashboard';
import { Category } from './Pages/Admin/Category/category/category';
import { SubCategory } from './Pages/Admin/Category/sub-category/sub-category';
import { HomeBanner } from './Pages/Admin/home-banner/home-banner';
import { ProductUpload } from './Pages/Admin/Product/product-upload/product-upload';
import { AddSize } from './Pages/Admin/Product/add-size/add-size';
import { AddRAM } from './Pages/Admin/Product/add-ram/add-ram';
import { ProductWeight } from './Pages/Admin/Product/product-weight/product-weight';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { User } from './Pages/Admin/User/user/user';
import { SubCategoryList } from './Pages/Admin/Category/sub-category-list/sub-category-list';
import { CategoryList } from './Pages/Admin/Category/category-list/category-list';

export const routes: Routes = [
{
    path: 'admin',
    component:AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'AddProductCategory', component: Category },
      { path: 'CategoryList', component: CategoryList },
      { path: 'AddProductSubCategory', component: SubCategory },
      { path: 'SubCategoryList', component: SubCategoryList },
      { path: 'HomeBanner', component: HomeBanner },
      { path: 'Product', component: ProductUpload },
      { path: 'AddSize', component: AddSize },
      { path: 'AddRam', component: AddRAM },
      { path: 'AddWeight', component: ProductWeight },
      { path: 'AddUser', component: User },
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
