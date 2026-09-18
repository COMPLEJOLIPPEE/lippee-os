import { supabase } from "@/lib/supabase";
import { Pedido } from "@/types/pedido";

export async function obtenerPedidos(): Promise<Pedido[]> {
  const { data, error } = await supabase
    .from("pedidos")
    .select(`
      *,
      clientes (
        nombre
      )
    `)
    .order("numero", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (
    data?.map((pedido: any) => ({
      ...pedido,
      cliente: pedido.clientes?.nombre ?? "Sin cliente",
    })) ?? []
  );
}