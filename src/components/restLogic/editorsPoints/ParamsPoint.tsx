import type { FC } from 'react';
import ParamsRow from './ParamsRow';
import { useFieldArray, useForm } from 'react-hook-form';
import type { ParamFormValues } from '../../../types/interfaces';

const ParamsPoint: FC = () => {
  const { register, control, handleSubmit } = useForm<ParamFormValues>({
    defaultValues: {
      params: [{ key: '', value: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'params' });

  const onSubmit = (data: ParamFormValues) => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <p className="mb-3 text-sm font-medium">Query Params</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 text-center py-1"></th>
              <th className="text-sm font-semibold text-left px-3 py-1 text-xs">
                Key
              </th>
              <th className="text-sm font-semibold text-left px-3 py-1 text-xs">
                Value
              </th>
              <th className="w-12 text-center py-1"></th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {fields.map((field, index) => {
              return (
                <ParamsRow
                  key={field.id}
                  register={register}
                  append={append}
                  remove={remove}
                  field={field}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ParamsPoint;
