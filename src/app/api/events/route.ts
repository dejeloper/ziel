import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { type IEventCreate } from "@/interfaces/IEvent";

export async function GET() {
  try {
    // throw new Error("Falla al obtener los eventos");

    const events = await prisma.event.findMany();

    const status = 200;
    return NextResponse.json(
      {
        status,
        message: "Eventos obtenidos exitosamente",
        data: events,
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
    const { name, description, startDate, endDate, location }: IEventCreate =
      await request.json();

    if (!name || !description || !startDate || !endDate || !location) {
      const status = 400;
      let message =
        "Faltan campos requeridos: name, description, startDate, endDate, location";

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

    const newEvent = await prisma.event.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        location,
      },
    });

    const status = 201;

    return NextResponse.json(
      {
        status,
        message: "Evento creado exitosamente",
        data: newEvent,
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
