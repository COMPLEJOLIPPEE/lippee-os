interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({
  title,
  description,
}: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}