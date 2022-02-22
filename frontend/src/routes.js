import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const supplierRoutes = [
    {
        path: "/home",
        name: "Home",
        icon: HomeIcon
    },
    {
        path: "/catalogs",
        name: "Catalogs",
        icon: CloudUploadIcon
    },
]

const adminRoutes = [
    {
        path: "/admin-panel",
        name: "Admin Panel",
        icon: AdminPanelSettingsIcon
    }
]
export {supplierRoutes, adminRoutes}