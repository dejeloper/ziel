import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { type IEventUpdate } from "@/interfaces/IEvent";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, { params }: IParams) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!event || event === null || event === undefined) {
      const status = 404;
      return NextResponse.json(
        {
          status,
          message: `Evento id: ${params.id} no encontrado`,
          data: null,
          success: false,
        },
        { status }
      );
    }
    const status = 200;
    return NextResponse.json(
      {
        status,
        message: "Evento obtenido exitosamente",
        data: event,
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

export async function PATCH(request: Request, { params }: IParams) {
  try {
    const { name, description, startDate, endDate, location }: IEventUpdate =
      await request.json();

    const updatedEvent = await prisma.event.update({
      where: {
        id: params.id,
      },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(startDate && { startDate: new Date(startDate) }),
        ...(endDate && { endDate: new Date(endDate) }),
        ...(location && { location }),
      },
    });

    const status = 200;
    return NextResponse.json(
      {
        status,
        message: "Evento actualizado exitosamente",
        data: updatedEvent,
        success: true,
      },
      { status }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        const status = 404;
        return NextResponse.json(
          {
            status,
            message: `Evento id: ${params.id} no encontrado`,
            data: null,
            success: false,
          },
          { status }
        );
      }
    }

    const status = 500;
    return NextResponse.json(
      {
        status,
        message:
          error instanceof Error ? error.message : "Error interno del servidor",
        data: null,
        success: false,
      },
      { status }
    );
  }
}

export async function DELETE(_request: Request, { params }: IParams) {
  try {
    const deleteEvent = await prisma.event.delete({
      where: {
        id: params.id,
      },
    });

    if (!deleteEvent) {
      const status = 404;
      return NextResponse.json(
        {
          status,
          message: `Evento id: ${params.id} no encontrado`,
          data: null,
          success: false,
        },
        { status }
      );
    }

    const status = 200;
    return NextResponse.json(
      {
        status,
        message: "Evento eliminado exitosamente",
        data: deleteEvent,
        success: true,
      },
      { status }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        const status = 404;
        return NextResponse.json(
          {
            status,
            message: `Evento id: ${params.id} no encontrado`,
            data: null,
            success: false,
          },
          { status }
        );
      }
    }

    const status = 500;
    return NextResponse.json(
      {
        status,
        message:
          error instanceof Error ? error.message : "Error interno del servidor",
        data: null,
        success: false,
      },
      { status }
    );
  }
}
