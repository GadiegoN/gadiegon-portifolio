import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Registra no console para fins de log de atendimento
    console.log(`[NOVO CONTATO RECEBIDO]:`, {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no processamento do formulário de contato:", error);
    return NextResponse.json(
      { error: "Falha interna ao processar mensagem." },
      { status: 500 }
    );
  }
}
