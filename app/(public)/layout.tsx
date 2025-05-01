import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full flex items-center justify-center">
      {/* Navbar */}
      <Navbar className="top-2" />

      {/* Main content */}
      <div className="min-h-screen">{children}</div>

      {/* Footer */}
    </main>
  );
}
