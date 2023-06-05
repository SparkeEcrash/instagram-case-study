import Feed from "@/components/Feed";
import Header from "@/components/Header";
import UploadModal from "@/components/UploadModal";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Feed />
      <UploadModal />
    </main>
  );
}
