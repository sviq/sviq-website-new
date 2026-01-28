interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container w-full max-w-7xl px-4 sm:px-6 lg:px-4 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
