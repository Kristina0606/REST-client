import { useEffect, type FC } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import deleteIcon from '../../../assets/bin_7606196.png';
import {
  toggleEnabled,
  updateHeader,
} from '../../../store/slices/headersSlice';
import HeaderChanger from './headerChanger';

const HeadersPoint: FC = () => {
  const dispatch = useDispatch();
  const headersFromStore = useSelector(
    (state: RootState) => state.headers.headers
  );
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: {
      headers: headersFromStore,
      newHeaderName: '',
      newHeaderValue: '',
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'headers',
    keyName: 'fieldKey',
  });

  useEffect(() => {
    reset({ headers: headersFromStore });
  }, [headersFromStore, reset]);

  const onSubmit = (data: any) => {
    dispatch(
      updateHeader({
        headerName: data.newHeaderName,
        newValue: data.newHeaderValue,
        enabled: true,
      })
    );
    reset({ newHeaderName: '', newHeaderValue: '' });
    console.log(data);
  };

  const autoHeaders = fields.map((field, index) => {
    if (field.enabled || field.source === 'auto' || field.source === 'browser')
      return (
        <tr key={field.id} className="hover:bg-gray-50 table-fixed w-full">
          <td className="text-center py-1">
            <input
              className="m-1"
              type="checkbox"
              checked={field.enabled}
              disabled={field.isImmutable}
              onChange={() => dispatch(toggleEnabled({ headerId: field.id }))}
            ></input>
          </td>

          <td className="px-3 py-1">
            <div className="flex items-center min-w-0">
              <input
                {...register(`headers.${index}.name`)}
                defaultValue={field.name}
                disabled
                className="text-xs w-80 min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
              />
            </div>
          </td>

          <td className="px-3 py-1">
            <div className="flex items-center min-w-0">
              <input
                {...register(`headers.${index}.value`)}
                defaultValue={field.value}
                disabled
                className="cursor-not-allowed text-xs w-80 min-w-0 text-sm px-2 py-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-400"
              />
            </div>
          </td>
          <td className="text-center"></td>
        </tr>
      );
  });

  return (
    <div className="max-w-3xl mx-auto w-[100%]">
      <p className="mb-3 text-sm font-medium">Headers</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden border border-gray-300">
          <thead className="bg-gray-50">
            <tr className="flex">
              <th className="w-12 text-center py-1"></th>
              <th className="font-semibold text-left px-3 py-1 text-xs mr-[40%]">
                Key
              </th>
              <th className="font-semibold text-left px-3 py-1 text-xs">
                Value
              </th>
              <th className="w-12 text-center py-1"></th>
            </tr>
          </thead>

          <tbody className="bg-white w-full divide-y divide-gray-200 block max-h-[150px] overflow-y-auto">
            {autoHeaders}
            <HeaderChanger register={register} fields={fields} reset={reset} />
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default HeadersPoint;
