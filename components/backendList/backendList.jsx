import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import {backendActions} from '../../src/store/backend-slice';

const backends = [
  { id: 0, name: 'NextJS JSON Local files', unavailable: false },
  { id: 1, name: 'MongoDB', unavailable: false },
  { id: 2, name: 'AWS Lambda + DynamoDB', unavailable: false },
  { id: 3, name: 'Google Firebase', unavailable: false },
  { id: 4, name: 'Supabase + Prisma + PostgreSQL', unavailable: false }
]

function BackendList() {
  const dispatch = useDispatch();
  //To retrieve state:
  const backendRedux = useSelector((state) => state.backend.backend);

  const handleBackendChange = (event) => {
    dispatch(backendActions.changeBackendTo(event.id));
  };

  return (
    <div className="w-52 mx-auto">
        
      <Listbox value={backendRedux} onChange={handleBackendChange} name="backend">
        <div className="relative mt-1">
        
          <Listbox.Button role="backendSelectorButton" className="relative w-full cursor-default rounded-lg bg-white text-black py-2 pl-3 pr-10 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{backends[backendRedux].name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            >
            <Listbox.Options className="absolute ml-0 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {backends.map((backend, backendIdx) => (
                <Listbox.Option
                  key={backendIdx}
                  role="backendOption"
                  className={({ active, disabled }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      && disabled ? 'text-slate-400' : 'text-gray-900'
                    }`
                  }
                  value={backend}
                  disabled={backend.unavailable}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {backend.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default BackendList;