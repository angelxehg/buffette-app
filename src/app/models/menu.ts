export interface MenuItem {
  title: string;
  link: string;
  icon: MenuIcon;
}

export interface MenuIcon {
  from: string; // fas, fab, etc
  name: string;
}
