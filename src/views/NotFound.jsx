import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  return(
    <div className="flex flex-wrap justify-center items-center h-[calc(100vh-121px)]">
      <div className="rounded-md bg-red-100 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3 text-left">
            <h3 className="text-sm font-medium text-yellow-800">La ruta que intentas consultar no existe</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p className='text-center'>
              🍰 😑
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}