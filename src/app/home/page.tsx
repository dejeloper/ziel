import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const title = "Hola 👋 Ziel ";
  const description =
    "Ziel es una aplicación de seguimiento de objetivos y tareas. Puedes crear objetivos y tareas, asignarles fechas y categorías, y hacer un seguimiento de tu progreso. Ziel te ayuda a mantenerte enfocado y a alcanzar tus metas.";
  const instructions =
    'Para comenzar, haz clic en el botón "Crear Objetivo" en la barra de navegación para crear un nuevo objetivo.';

  const calltoAction =
    "Revisa tus objetivos y tareas por cumplir en la página 'Diario'.";

  return (
    <div className="flex flex-col justify-center m-4">
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-lg text-left text-gray-400 dark:text-gray-300 lg:mx-auto lg:w-3/4 2xl:w-2/3">
        {description}
      </p>
      <p className="mt-8 text-sm text-left text-gray-400 dark:text-gray-300/90 lg:mx-auto lg:w-3/4 2xl:w-2/3">
        {instructions}
      </p>

      <div className="flex flex-col justify-center items-center mt-8 max-w-[500px] mx-auto">
        <div className="flex flex-col xs:flex-row justify-center xs:w-auto w-full mx-auto">
          <Button
            variant="lineal"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium"
          >
            <Link
              href="/objectives/new"
              className="text-red-500 xs:text-blue-500"
            >
              Crear Objetivo
            </Link>
          </Button>
          <Button
            variant="lineal"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium"
          >
            <Link href="/tasks/new">Crear Tarea</Link>
          </Button>
        </div>
        <div className="flex flex-col xs:flex-row justify-center xs:w-2/3 w-full mx-auto">
          <Button
            variant="success"
            className="font-medium rounded-lg text-sm py-2.5 px-5 mt-2 text-center w-full"
          >
            <Link href="/daily">Diario</Link>
          </Button>
        </div>
        <p className="mt-4 text-md text-left text-gray-700 dark:text-gray-200">
          {calltoAction}
        </p>
      </div>
    </div>
  );
}
