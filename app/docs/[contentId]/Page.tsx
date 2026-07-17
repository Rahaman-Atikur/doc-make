type PageProps = {
  params: Promise<{
    contentId: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { contentId } = await params;

  return (
    <div>
      {contentId}
    </div>
  );
};

export default Page;