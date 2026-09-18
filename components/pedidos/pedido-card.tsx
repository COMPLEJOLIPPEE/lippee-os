type PedidoCardProps = {
  numero: number;
  estado: string;
  tipo: string;
  total: number;
  cliente?: string;
  hora?: string;
};

export default function PedidoCard({
  numero,
  estado,
  tipo,
  total,
  cliente,
  hora,
}: PedidoCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          Pedido #{numero}
        </h3>

        <span className="rounded bg-gray-100 px-2 py-1 text-sm">
          {estado}
        </span>
      </div>

      <div className="mt-3 space-y-1 text-sm text-gray-600">
        {cliente && <p>Cliente: {cliente}</p>}
        {hora && <p>Hora: {hora}</p>}
        <p>Tipo: {tipo}</p>
        <p>Total: ${Number(total).toLocaleString("es-AR")}</p>
      </div>
    </div>
  );
}