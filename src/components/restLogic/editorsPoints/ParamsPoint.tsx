import { useCallback, useEffect, useMemo, type FC } from 'react';
import ParamsRow from './ParamsRow';
import { useFieldArray, useForm } from 'react-hook-form';
import type { ParamFormValues } from '../../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '../../../store/slices/paramsSlice';
import type { RootState } from '../../../store/store';
import { setUrlRequest } from '../../../store/slices/requestSlice';
import React from 'react';

const ParamsPoint: FC = () => {
  const { register, control, handleSubmit } = useForm<ParamFormValues>({
    defaultValues: {
      params: [{ key: '', value: '' }],
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'params',
  });
  const originUrl = useSelector((state: RootState) => state.request.originUrl);
  const urlParams = useSelector(
    (state: RootState) => state.params.paramsForUrl
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (originUrl) {
      const newUrl = `${originUrl}?${urlParams.join('&')}`;
      dispatch(setUrlRequest({ urlRequest: newUrl }));
    }
  }, [urlParams, originUrl]);

  const onSubmit = useCallback(
    (data: ParamFormValues) => {
      const newValues = data.params.filter((param) => param.key.trim() !== '');
      dispatch(setParams(newValues));
    },
    [dispatch]
  );

  const handleRowSubmit = useCallback(
    (...args: unknown[]) => handleSubmit(onSubmit)(...(args as any)),
    [handleSubmit, onSubmit]
  );

  const rows = useMemo(
    () =>
      fields.map((field, index) => (
        <ParamsRow
          key={field.id}
          register={register}
          append={append}
          remove={remove}
          field={field}
          index={index}
          update={update}
          handleSubmit={handleRowSubmit}
          fields={fields}
        />
      )),
    [fields, register, append, remove, update, handleRowSubmit]
  );

  return (
    <div className="max-w-3xl mx-auto w-[100%]">
      <p className="mb-3 text-sm font-medium">Query Params</p>
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
            {rows}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default React.memo(ParamsPoint);
