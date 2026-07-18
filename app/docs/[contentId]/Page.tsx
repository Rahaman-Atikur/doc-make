import React from 'react';
type PageProps = {
  params: {
    contentId: string;
  };
};
const Page = ({params}:PageProps) => {
  return (
    <div>
      {`This is the page for contentId: ${params.contentId}`}
    </div>
  );
};

export default Page;