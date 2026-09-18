import PageTitle from "@/components/shared/page-title";
import StatCard from "@/components/shared/stat-card";

import {
  Package,
  ChefHat,
  Truck,
  TriangleAlert,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <PageTitle
        title="Centro de Operaciones"
        description="Resumen en tiempo real de la operación."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Pedidos pendientes"
          value={0}
          icon={Package}
        />

        <StatCard
          title="En preparación"
          value={0}
          icon={ChefHat}
        />

        <StatCard
          title="Delivery"
          value={0}
          icon={Truck}
        />

        <StatCard
          title="Demorados"
          value={0}
          icon={TriangleAlert}
          color="text-red-600"
        />
      </div>
    </>
  );
}