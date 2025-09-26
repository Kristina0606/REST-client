import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setEditor } from '../../store/slices/editorSlice';
import ParamsPoint from './editorsPoints/ParamsPoint';
import HeadersPoint from './editorsPoints/HeadersPoint';
import BodyPoint from './editorsPoints/BodyPoint';

const RequestEditor: FC = () => {
  const dispatch = useDispatch();
  const currentEditor = useSelector((state: RootState) => state.editor.editor);

  const handleSelect = (tab: any) => {
    if (tab === currentEditor) return;
    dispatch(setEditor({ editor: tab }));
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      <div className="flex gap-10">
        <div className="cursor-pointer" onClick={() => handleSelect('Params')}>
          <span
            className={`relative pl-3 transition-colors duration-200 text-xs ${
              currentEditor === 'Params'
                ? "text-violet-600 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-0.5 before:bg-violet-500 before:rounded-sm before:block"
                : 'text-gray-700'
            }`}
          >
            Params
          </span>
        </div>

        <div className="cursor-pointer" onClick={() => handleSelect('Headers')}>
          <span
            className={`relative text-xs pl-3 transition-colors duration-200 ${
              currentEditor === 'Headers'
                ? "text-violet-600 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-0.5 before:bg-violet-500 before:rounded-sm before:block"
                : 'text-gray-700'
            }`}
          >
            Headers
          </span>
        </div>

        <div className="cursor-pointer" onClick={() => handleSelect('Body')}>
          <span
            className={`relative text-xs pl-3 transition-colors duration-200 ${
              currentEditor === 'Body'
                ? "text-violet-600 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-0.5 before:bg-violet-500 before:rounded-sm before:block"
                : 'text-gray-700'
            }`}
          >
            Body
          </span>
        </div>
      </div>

      <div className="bg-white w-[78%] ml-6 rounded-lg p-2 text-xs">
        {currentEditor === 'Params' && <ParamsPoint />}
        {currentEditor === 'Headers' && <HeadersPoint />}
        {currentEditor === 'Body' && <BodyPoint />}
      </div>
    </div>
  );
};

export default RequestEditor;
