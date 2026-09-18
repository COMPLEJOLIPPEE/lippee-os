export interface Pedido {
  id: string;
  numero: number;

  cliente_id: string | null;
  cliente: string;

  direccion_id: string | null;
  sucursal_id: string | null;
  repartidor_id: string | null;

  tipo: string;
  estado: string;

  subtotal: number;
  envio: number;
  descuento: number;
  total: number;

  forma_pago: string | null;
  observaciones: string | null;

  hora_estimada: string | null;
  hora_entregado: string | null;

  created_at: string;
  updated_at: string;
}