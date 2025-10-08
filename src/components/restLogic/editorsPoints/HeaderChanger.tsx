import type { FC } from 'react';
import eraserImg from '../../../assets/eraser_17146961.png';
import type { HeaderChangerProps } from '../../../types/interfaces';

const HeaderChanger: FC<HeaderChangerProps> = ({ register, fields, reset }) => {
  return (
    <tr className="hover:bg-gray-50 table-fixed w-full">
      <td className="text-center py-1">
        <input className="m-1" type="checkbox"></input>
      </td>

      <td className="px-3 py-1">
        <div className="flex items-center min-w-0">
          <select
            defaultValue=""
            {...register('newHeaderName')}
            className='className="text-xs w-80 min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"'
          >
            <option value="">- choose option -</option>
            {fields.map((item) => {
              if (!item.isImmutable) {
                return (
                  <option key={item.fieldKey} value={item.name}>
                    {item.name}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </td>

      <td className="px-3 py-1">
        <div className="flex items-center min-w-0">
          <input
            {...register('newHeaderValue')}
            className="text-xs w-80 min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
          />
        </div>
      </td>

      <td className="text-center py-1">
        <button
          onClick={() => {
            reset({ newHeaderName: '', newHeaderValue: '' });
          }}
          className="cursor-pointer inline-flex items-center justify-center h-8 w-8 rounded-md border border-transparent hover:border-gray-200"
        >
          <img src={eraserImg} className="w-6" alt="delete" />
        </button>
      </td>
    </tr>
  );
};

export default HeaderChanger;
