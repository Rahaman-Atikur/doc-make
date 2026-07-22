import React from 'react';

const page = ({params:{contentId}}) => {
  return (
    <div>
      {`This is the page for contentId: ${contentId}`}
    </div>
  );
};

export default page;