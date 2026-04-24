interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="page-title">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="heritage-divider max-w-md mx-auto mt-8">
        <span className="w-2 h-2 bg-accent/60 rotate-45" />
      </div>
    </div>
  );
};

export default PageHeader;
