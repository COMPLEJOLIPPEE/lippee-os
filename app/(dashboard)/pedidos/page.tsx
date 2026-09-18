import PageTitle from "@/components/shared/page-title";
import PedidoCard from "@/components/pedidos/pedido-card";
import { obtenerPedidos } from "@/services/pedidos";
import { Pedido } from "@/types/pedido";

export default async function PedidosPage() {
  const pedidos = await obtenerPedidos();

  const nuevos = pedidos.filter((p) => p.estado === "nuevo");
  const confirmados = pedidos.filter((p) => p.estado === "confirmado");
  const preparacion = pedidos.filter((p) => p.estado === "preparacion");
  const listos = pedidos.filter((p) => p.estado === "listo");

  return (
    <div className="space-y-8">
      <PageTitle
        title="Pedidos"
        description="Centro de operaciones de pedidos."
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <Columna titulo="Nuevos" pedidos={nuevos} />
        <Columna titulo="Confirmados" pedidos={confirmados} />
        <Columna titulo="En preparación" pedidos={preparacion} />
        <Columna titulo="Listos" pedidos={listos} />
      </div>
    </div>
  );
}

type ColumnaProps = {
  titulo: string;
  pedidos: Pedido[];
};

function Columna({ titulo, pedidos }: ColumnaProps) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <h2 className="mb-4 text-lg font-semibold">
        {titulo} ({pedidos.length})
      </h2>

      <div className="space-y-4">
        {pedidos.length === 0 ? (
          <div className="rounded-lg border border-dashed p-6 text-center text-sm text-gray-500">
            Sin pedidos
          </div>
        ) : (
          pedidos.map((pedido) => (
            <PedidoCard
              key={pedido.id}
              numero={pedido.numero}
              estado={pedido.estado}
              tipo={pedido.tipo}
              total={pedido.total}
              cliente={pedido.cliente}
              hora={new Date(pedido.created_at).toLocaleTimeString("es-AR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          ))
        )}
      </div>
    </div>
  );
}