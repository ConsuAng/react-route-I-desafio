import Container from "../layouts/Container";

export default function Contact() {
  return (
    <Container >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-light pb-11">
          Cuentanos, ¿en que te podemos ayudar?
        </h1>
        <div className="flex flex-col items-center w-full pb-11">
          <label htmlFor="email" className="block text-lg font-normal text-gray-700">
            Correo:
          </label>
          <div className="mt-1 w-3/4">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center h-9"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full pb-10">
          <label htmlFor="message" className="block text-lg font-normal text-gray-700">
            Descripción
          </label>
          <div className="mt-1 w-3/4">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </div>
      </div>
    </Container>
  )
}