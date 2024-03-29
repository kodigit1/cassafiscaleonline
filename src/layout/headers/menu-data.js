const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "La tua Cassa Digitale",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics" },
      { link: "/home-2", title: "Payment Gateway" },
      { link: "/home-3", title: "CRM Software" },
      { link: "/home-4", title: "Security Software" },
      { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Contatti",
    link: "/contact",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" }, 
    ],
  },

];
export default menu_data;
