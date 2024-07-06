import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { IObjectiveCreate } from "@/interfaces/IObjective";

export async function GET() {
  try {
    const objectives = await prisma.objective.findMany();
    let status = 200;

    if (
      !objectives ||
      objectives === null ||
      objectives === undefined ||
      objectives.length === 0
    ) {
      status = 404;
      return NextResponse.json(
        {
          status,
          message: "No hay objetivos",
          data: null,
          success: false,
        },
        { status }
      );
    }

    return NextResponse.json(
      {
        status,
        message: "Objetivos obtenidos exitosamente",
        data: objectives,
        success: true,
      },
      { status }
    );
  } catch (error) {
    if (error instanceof Error) {
      const status = 500;
      return NextResponse.json(
        {
          status,
          message:
            error instanceof Error
              ? error.message
              : "Error interno del servidor",
          data: null,
          success: false,
        },
        { status }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const { name, description }: IObjectiveCreate = await request.json();
    if (!name || !description) {
      const status = 400;
      let message = "Faltan campos requeridos: name, description";
      return NextResponse.json(
        {
          status,
          message,
          data: null,
          success: false,
        },
        { status }
      );
    }
    const newObjective = await prisma.objective.create({
      data: {
        name,
        description,
      },
    });

    const status = 201;
    return NextResponse.json(
      {
        status,
        message: "Objetivo creado exitosamente",
        data: newObjective,
        success: true,
      },
      { status }
    );
  } catch (error) {
    if (error instanceof Error) {
      const status = 500;
      return NextResponse.json(
        {
          status,
          message:
            error instanceof Error
              ? error.message
              : "Error interno del servidor",
          data: null,
          success: false,
        },
        { status }
      );
    }
  }
}
