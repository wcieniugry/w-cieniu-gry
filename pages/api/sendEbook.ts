import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body
  if (!email) return res.status(400).json({ message: 'Brak adresu e-mail.' })

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: process.env.EMAIL_SUBJECT || 'Twój egzemplarz „W cieniu gry”',
      text: 'Dziękujemy za zakup! Ebook w załączniku.',
      attachments: [
        {
          filename: 'W_cieniu_gry.pdf',
          path: `${process.cwd()}/public/W_cieniu_gry_FINAL_z_okladka.pdf`,
        },
      ],
    })

    res.status(200).json({ message: 'Wysłano e-booka.' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Błąd podczas wysyłki e-maila.' })
  }
}
