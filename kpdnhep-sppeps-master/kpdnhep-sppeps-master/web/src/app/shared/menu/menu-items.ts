import { path } from "@amcharts/amcharts4/core";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const approveOfficerRoutes: RouteInfo[] = [
  {
    path: "/approving-officer",
    title: "Pegawai Pelulus",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "approvingofficer",
    isCollapsed: true,
    children: [
      { path: "list-to-approve", title: "List To Approve", type: "link" },
      { path: "approve-information", title: "Approve Information", type: "link" },
      { path: "approved-list", title: "Approved List", type: "link" },
    ],
  },
];

export const supportingOfficerRoutes: RouteInfo[] = [

  {
    path: "/supporting-officer",
    title: "Pegawai Penyokong",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "supportingofficer",
    isCollapsed: true,
    children: [
      { path: "support-application-list", title: "Tugasan Baru", type: "link" },
      // { path: "support-application-information", title: "Tugasan Sekarang", type: "link"},
      { path: "completed-application-list", title: "Tugasan Selesai", type: "link" },
    ],
  },
];

export const hqProcessingOfficerRoutes: RouteInfo[] = [
  {
    path: "/hq-processing-officer",
    title: "Pegawai Pemproses HQ",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "hqprocessingofficer",
    isCollapsed: true,
    children: [
      { path: "hq-application-list", title: "Tugasan Baru", type: "link" },
      { path: "hq-completed-list", title: "Tugasan Selesai", type: "link" },
      { path: "blacklist-application", title: "Senarai Hitam Permohonan", type: "link" },
    ],
  },
];

export const stateProcessingOfficerRoutes: RouteInfo[] = [
  {
    path: "/state-processing-officer",
    title: "Pegawai Pemproses Negeri",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "stateprocessingofficer",
    isCollapsed: true,
    children: [
      { path: "state-application-list", title: "Tugasan Baru", type: "link" },
      { path: "state-completed-list", title: "Tugasan Selesai", type: "link" },
      { path: "application-fee", title: "Bayaran Permohonan", type: "link" },
      { path: "permit-approval-percentage", title: "Peratusan Kelulusan Permit", type: "link" }
    ],

  },
  // {
  //   path: "/global-officer",
  //   title: "Laporan dan Statistik",
  //   type: "sub",
  //   icontype: "fas fa-file-invoice text-black",
  //   collapse: "report",
  //   isCollapsed: true,
  //   children: [
  //     // { path: "state-application-list", title: "Tugasan Baru", type: "link" },
  //     // { path: "state-completed-list", title: "Tugasan Selesai", type: "link" },
  //     // { path: "application-fee", title: "Bayaran Permohonan", type: "link" },
  //     { path: "permit-approval-percentage", title: "Peratusan Kelulusan Permit", type: "link" }
  //   ],
  // }

];

export const GlobalOfficerRoutes: RouteInfo[] = [
  {
    path: "/global-officer",
    title: "Laporan dan Statistik",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "report",
    isCollapsed: true,
    children: [
      { path: "permit-approval-percentage", title: "Peratusan Kelulusan Permit", type: "link" },
      { path: "permit-rejected-percentage", title: "Peratusan Permit Ditolak", type: "link" },
      { path: "application-history-report", title: "Laporan Sejarah Permohonan", type: "link" },
      { path: "blacklisted-application-report", title: "Laporan Permohonan Disenarai Hitam", type: "link" },
      { path: "permit-holder-statistics", title: "Statistik Pemegang Permit", type: "link" },
      { path: "fi-collection-statistics", title: "Statistik Kutipan FI", type: "link" }
    ],
  }

];


export const infoManagementAdminRoutes: RouteInfo[] = [
  {
    path: "/information-management-admin",
    title: "Pentadbir Pengurusan Maklumat",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "infoManagementAdmin",
    isCollapsed: true,
    children: [
      // { path: "audit-trails", title: "Audit Trails", type: "link" },
      { path: "user-logs", title: "Log Pengguna", type: "link" },
      { path: "applicants-logs", title: "Log Pemohon", type: "link" },
      
      // { path: "state-completed-list", title: "Tugasan Selesai", type: "link" },
      // { path: "application-fee", title: "Bayaran Permohonan", type: "link" },
    ],
  },
];

export const adminHqRoutes: RouteInfo[] = [
  {
    path: "/admin-hq",
    title: "Pentadbir Sistem HQ",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "adminhq",
    isCollapsed: true,
    children: [
      { path: "announcement-administration", title: "Pengumuman", type: "link" },
      { path: "archive-document", title: "Arkib Dokumen", type: "link" },
      { path: "archive-pictorial", title: "Arkib Bergambar", type: "link" },
      { path: "banner-administration", title: "Banner", type: "link" },
      { path: "faq-administration", title: "Kofigurasi Soalan Lazim (FAQ)", type: "link" },
      { path: "officer-role", title: "Peranan Pegawai", type: "link" },
      { path: "update-application", title: "Kemaskini Permohonan", type: "link" },
      // { path: "../../check-application-status", title: "Semakan Permohonan", type: "link" },
    ],
  },
];

export const agencyPdrmRoutes: RouteInfo[] = [
  {
    path: "/agency-pdrm",
    title: "Pegawai PDRM",
    type: "sub",
    icontype: "fas fa-file-invoice text-black",
    collapse: "pdrm",
    isCollapsed: true,
    children: [
      { path: "application-list", title: "Tugasan Baru", type: "link" },
      { path: "checked-application-list", title: "Tugasan Selesai", type: "link" },
    ],
  },
];

export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' },
      { path: 'test', title: 'Test', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  /*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];