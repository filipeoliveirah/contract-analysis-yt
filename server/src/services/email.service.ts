import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export const resend = new Resend(RESEND_API_KEY);

export const sendPremiumConfirmationEmail = async (
  userEmail: string,
  userName: string
) => {
  try {
    await resend.emails.send({
      from: "Contrato Legal <suporte@outlimit.com.br>",
      to: userEmail,
      subject: "Bem-estar Contrato Legal Premium",
      html: 
        `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #2a5885;">Olá ${userName}!</h2>
          
          <p>Parabéns! Você agora é um usuário Premium do Contrato Legal.</p>
          
          <p>Com sua assinatura Premium, você tem acesso a:</p>
          <ul>
            <li>Análise ilimitada de contratos</li>
            <li>Modelos de documentos exclusivos</li>
            <li>Suporte prioritário da nossa equipe</li>
            <li>Recursos avançados de análise jurídica</li>
          </ul>
          
          <p>Para começar a aproveitar todos os benefícios, <a href="#" style="color: #2a5885; text-decoration: none; font-weight: bold;">acesse sua conta agora</a>.</p>
          
          <p>Caso tenha alguma dúvida, responda a este email ou entre em contato com nossa equipe de suporte.</p>
          
          <p>Atenciosamente,<br>
          Equipe Contrato Legal</p>
        </div>
      `,
    });
  } catch (error) {
    console.error(error);
  }
};
