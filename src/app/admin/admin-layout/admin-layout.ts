import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
 openMenu: string | null = null;
 menuData = [
  {
    title: "Dashboard",
    path: "/admin",
    // icon:<mat-icon></mat-icon>
  },
  {
    title: "Products",
    // icon: <FaBox />,
    children: [
      {
        title: "All Products",
        path: "/admin/Product"
      },
      {
        title: "Product Upload",
        path: "/admin/ProductUpload"
      },
      {
        title: "Add Product Size",
        path: "/admin/AddSize"
      }
      ,
      {
        title: "Add Product Weight ",
        path: "/admin/AddWeight"
      }
      ,
      {
        title: "Add Product RAMS",
        path: "/admin/AddRam"
      }
      ,
      
    ]
  },
  {title:"Category",
    // icon:<Fa42Group/>,
    children:[
      {
        title: "Add a Category",
        path: "/admin/AddProductCategory"
      },
       {
        title: "Category List",
        path: "/admin/CategoryList"
      }
      ,
      {
        title: "Add a Sub Category",
        path: "/admin/AddProductSubCategory"
      }
      ,
      {
        title: "Sub Category List",
        path: "/admin/SubCategoryList"
      }
    ]
  },
  {
    title: "Users",
    // icon: <FaUsers />,
    children: [
      {
        title: "Users List",
        path: "/admin/UserList"
      },
        {
        title: "Add Users",
        path: "/admin/AddUser"
      }
      ,
        {
        title: "Role",
        path: "/admin/Role"
      }
    ]
  },
  {
    title: "Settings",
    path: "/admin/settings",
    // icon: <FaCog />
  }
];

  toggleMenu(title: string) {
    this.openMenu = this.openMenu === title ? null : title;
  }


}
