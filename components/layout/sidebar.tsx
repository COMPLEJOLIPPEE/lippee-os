"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/components/navigation/sidebar-menu";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b p-6">
        <h1 className="text-xl font-bold">Lippee OS</h1>
        <p className="text-sm text-slate-500">
          Centro de Operaciones
        </p>
      </div>

      {/* Menú */}
      <nav className="flex-1 space-y-1 p-3">
        {sidebarMenu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Empresa */}
      <div className="border-t p-4">
        <p className="font-medium">Lippee</p>
        <p className="text-sm text-slate-500">
          Canning
        </p>
      </div>
    </aside>
  );
}