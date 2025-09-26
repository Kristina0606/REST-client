import { useEffect, type FC } from 'react';
import { useForm } from 'react-hook-form';
import type { URLFormValues } from '../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setMethod, setUrlRequest } from '../../store/slices/requestSlice';

const URLForm: FC = () => {
  const methods = useSelector((state: RootState) => state.request.methodsList);
  const state = useSelector((state: RootState) => state.request);

  useEffect(() => {
    console.log('request state changed', state);
  }, [state]);

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<URLFormValues>({
    defaultValues: { method: 'GET' },
  });
  const onSubmit = (data: any) => {
    dispatch(setMethod({ method: data.method }));
    dispatch(setUrlRequest({ urlRequest: data.urlRequest }));
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex m-3 w-full h-10 justify-center"
      >
        <select
          className="text-sm bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-800 duration-150"
          id="method-select"
          {...register('method', {
            required: true,
            onBlur: (e) => dispatch(setMethod({ method: e.target.value })),
          })}
        >
          {methods.map((item) => (
            <option value={item} key={item} className="text-xs">
              {item}
            </option>
          ))}
        </select>

        <div className="w-[68%]">
          <input
            type="text"
            {...register('urlRequest', {
              required: '*URL cannot be empty',
              onBlur: (e) =>
                dispatch(setUrlRequest({ urlRequest: e.target.value })),
            })}
            className="bg-white outline-none p-4 h-10 w-[100%]"
          />
          <div>
            {errors?.urlRequest && (
              <p className="absolute text-wrap text-[#9977fb] text-xs">
                {errors.urlRequest.message || 'error!'}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-sm cursor-pointer pr-3 pl-3 bg-[#f5f5f5] text-[#4a4a4a] hover:bg-[#e0e0e0] transition-colors duration-200 rounded-r-lg cursor-pointer"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default URLForm;
