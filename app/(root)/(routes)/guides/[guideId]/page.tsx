import { auth } from "@/auth";
import { IconBadge } from "@/components/Icon-Badge";
import { db } from "@/lib/db";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
const GuidesIdPage = async ({
  params
}: {
  params: { guideId: string }
}) => {
  // get user ID
  const session = auth()

  // check if user is logged in
  if (!session) {
    return redirect('/')
  }

  // get guide
  const guide = await db.guide.findUnique({
    where: {
      id: params.guideId
    }
  })

  // if no guide, redirect to home
  if (!guide) {
    return redirect('/')
  }

  // array of required fields
  const requiredFields = [
    guide.title,
    guide.description,
    guide.imageUrl,
    guide.price,
    guide.categoryId
  ];

  const totalFields = requiredFields.length;
  // total that dont equal false
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields}/${totalFields})`
  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">
            Guide SetUp
          </h1>
          <span className="text-sm text-slate-300">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} variant="success"/>
            <h2 className="text-xl">
              Customize Gudie
            </h2>
          </div>
          <TitleForm initialData={guide} guideId={guide.id}/>
        </div>
      </div>
    </div>
  );
}
export default GuidesIdPage;