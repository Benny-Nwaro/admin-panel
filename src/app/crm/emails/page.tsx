import EmailList from "@/components/crm/emails/EmailList";
import Sidebar from "@/components/crm/emails/Sidebar";
import MainWrapper from "@/components/MainWarpper";

export default function Page() {
  return (
    <MainWrapper>
    <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:mx-16">
      <Sidebar />
      <EmailList />
    </div>
    </MainWrapper>
  );
}
