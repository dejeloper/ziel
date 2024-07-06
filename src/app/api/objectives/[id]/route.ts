import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { IObjectiveUpdate } from "@/interfaces/IObjective";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, { params }: IParams) {
  try {
    const objective = await prisma.objective.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!objective || objective === null || objective === undefined) {
      const status = 404;
      return NextResponse.json(
        {
          status,
          message: `Objetivo id: ${params.id} no encontrado`,
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
        message: "Objetivo obtenido exitosamente",
        data: objective,
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
    const { name, description }: IObjectiveUpdate = await request.json();

    const updateObjective = await prisma.objective.update({
      where: {
        id: Number(params.id),
      },
      data: {
        ...(name && { name }),
        ...(description && { description }),
      },
    });

    const status = 200;
    return NextResponse.json(
      {
        status,
        message: "Objetivo actualizado exitosamente",
        data: updateObjective,
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
            message: `Objetivo id: ${params.id} no encontrado`,
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
    const deleteObjective = await prisma.objective.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteObjective) {
      const status = 404;
      return NextResponse.json(
        {
          status,
          message: `Objetivo id: ${params.id} no encontrado`,
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
        message: "Objetivo eliminado exitosamente",
        data: deleteObjective,
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
            message: `Objetivo id: ${params.id} no encontrado`,
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
