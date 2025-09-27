import type { FC } from 'react';
import deleteIcon from '../../../assets/bin_7606196.png';
import type { ParamsRowProps } from '../../../types/interfaces';

const ParamsRow: FC<ParamsRowProps> = ({
  register,
  append,
  remove,
  field,
  index,
  handleSubmit,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="text-center py-1">
        <button
          onClick={() => append({ key: '', value: '' })}
          type="submit"
          className="text-xs cursor-pointer inline-flex items-center justify-center h-6 w-6 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </td>

      <td className="px-3 py-1">
        <div className="flex items-center min-w-0">
          <input
            {...register(`params.${index}.key`)}
            defaultValue={field.key}
            className="text-xs w-full min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
          />
        </div>
      </td>

      <td className="px-3 py-1">
        <div className="flex items-center min-w-0">
          <input
            {...register(`params.${index}.value`)}
            defaultValue={field.value}
            className="text-xs w-full min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
          />
        </div>
      </td>

      <td className="text-center py-1">
        <button
          onClick={() => {
            remove(index);
            setTimeout(() => {
              handleSubmit();
            }, 0);
          }}
          className="cursor-pointer inline-flex items-center justify-center h-8 w-8 rounded-md border border-transparent hover:border-gray-200"
        >
          <img src={deleteIcon} className="w-4 opacity-70" alt="delete" />
        </button>
      </td>
    </tr>
  );
};

export default ParamsRow;
