import AdminMenu from "@/app/components/AdminMenu";
import PageStyler from "@/app/components/PageStyler";

export default function Dashboard() {
  return (
    <PageStyler>
      <main className="md:p-10 p-4  max-w-full ">
        <AdminMenu />
      </main>
    </PageStyler>
  );
}
