import type { FC } from 'react';
import URLForm from './URLForm';
import RequestEditor from './RequestEditor';

const RestPanel: FC = () => {
  return (
    <>
      <URLForm />
      <RequestEditor />
    </>
  );
};

export default RestPanel;
