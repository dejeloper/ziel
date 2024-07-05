import Link from "next/link";

export default function HomePage() {
  const title = "Bienvenido a Ziel";
  const description =
    "Ziel es una aplicación de seguimiento de objetivos y tareas. Puedes crear objetivos y tareas, asignarles fechas de vencimiento y categorías, y hacer un seguimiento de tu progreso. Ziel te ayuda a mantenerte enfocado y a alcanzar tus metas.";
  const instructions =
    'Para comenzar, haz clic en el botón "Crear objetivo" en la barra de navegación para crear un nuevo objetivo. Puedes ver tus objetivos en la página de objetivos y tus tareas en la página de tareas. También puedes filtrar tus objetivos y tareas por categoría. ';

  const calltoAction =
    "Revisa tus objetivos y tareas por cumplir en la página Hoy.";

  return (
    <div className="flex flex-col justify-center m-4">
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-lg text-left text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <p className="mt-4 text-md text-left text-gray-500 dark:text-gray-400">
        {instructions}
      </p>

      <div className="flex flex-col justify-center items-center mt-8 w-full mx-auto">
        <div className="flex justify-center w-full mx-auto">
          <Link
            href="/objectives/new"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Crear nuevo objetivo
          </Link>
          <Link
            href="/tasks/new"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Crear nueva tarea
          </Link>
        </div>
        <Link
          href="/today"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm py-2.5 px-5 mt-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-1/2 text-center"
        >
          Hoy
        </Link>
        <p className="mt-4 text-md text-left text-gray-700 dark:text-gray-200">
          {calltoAction}
        </p>
      </div>
    </div>
  );
}
