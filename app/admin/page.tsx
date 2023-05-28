import AdminLogin from "../components/AdminLogin";
import PageStyler from "../components/PageStyler";

export const metadata = {
  title: "Admin",
  description: "Admin Page",
};

export default function Admin() {

  return (
    <PageStyler>
      <main className="md:p-10 p-4 max-w-full ">
        <AdminLogin />
      </main>
    </PageStyler>
  );
}
