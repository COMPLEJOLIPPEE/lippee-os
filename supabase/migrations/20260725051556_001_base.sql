-- Extensiones
create extension if not exists "pgcrypto";

-- ==========================
-- EMPRESAS
-- ==========================
create table public.empresas (
    id uuid primary key default gen_random_uuid(),
    nombre text not null,
    razon_social text,
    cuit varchar(20),
    email text,
    telefono text,
    direccion text,
    activo boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================
-- SUCURSALES
-- ==========================
create table public.sucursales (
    id uuid primary key default gen_random_uuid(),
    empresa_id uuid not null references public.empresas(id) on delete cascade,

    nombre text not null,
    codigo varchar(20),
    direccion text,
    telefono text,

    activo boolean not null default true,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================
-- USUARIOS_EMPRESAS
-- ==========================
create table public.usuarios_empresas (
    id uuid primary key default gen_random_uuid(),

    user_id uuid not null,
    empresa_id uuid not null references public.empresas(id) on delete cascade,

    rol varchar(30) not null default 'usuario',

    created_at timestamptz not null default now(),

    unique(user_id, empresa_id)
);

-- Índices
create index idx_sucursales_empresa
on public.sucursales(empresa_id);

create index idx_usuarios_empresa
on public.usuarios_empresas(empresa_id);