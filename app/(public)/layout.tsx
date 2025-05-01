import Navbar from "@/components/shared/nav/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <div className="min-h-screen pt-20">{children}</div>

      {/* footer */}
      {/* <Footer /> */}
    </main>
  );
}
