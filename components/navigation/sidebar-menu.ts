import {
  LayoutDashboard,
  Package,
  Users,
  Pizza,
  Truck,
  Settings,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Centro",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Pedidos",
    href: "/pedidos",
    icon: Package,
  },
  {
    title: "Carta",
    href: "/productos",
    icon: Pizza,
  },
  {
    title: "Clientes",
    href: "/clientes",
    icon: Users,
  },
  {
    title: "Delivery",
    href: "/delivery",
    icon: Truck,
  },
  {
    title: "Administración",
    href: "/configuracion",
    icon: Settings,
  },
];