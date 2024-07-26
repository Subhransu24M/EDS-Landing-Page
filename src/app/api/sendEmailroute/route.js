import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request){
  console.log ("trying to send me");
  console.log(process.env.SMTP_SERVER);
  console.log(process.env.SMTP_USERNAME);
  console.log(process.env.SMTP_PASSWORD);
    const { bname,fname,emailid,pnumber,service } = await request.json();
    const port = parseInt(process.env.SMTP_PORT)
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            pool: true,
            port,
            secure: port === 465 ? true : false, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USERNAME,
              pass: process.env.SMTP_PASSWORD,
            },
            tls :{
              rejectUnauthorized : false
            }
          })
    
          const mailOption ={
            from: 'subhransu@elevatedigitalservices.com',
            to: 'satyajeet@elevatebs.com',
            subject: "🎉New submission to your contact form!",
            html:`
             <h3>Elevate Digital Services Form Details</h3>
             <li>Business Name : <strong>${bname}</strong></li>
             <li>Customer Name : <strong>${fname}</strong></li>
             <li>Contact Number : <strong>${pnumber}</strong></li>
             <li>Mail Id : <strong>${emailid}</strong></li>
             <li>Selected Service : <strong>${service}</strong></li>
            `
          }
    
          const result  = await transporter.sendMail(mailOption)
          console.log(result)

          return NextResponse.json({message : "Email Sent Sucessfully"},{status :200})
    } catch (error) {
      console.log(error)
        return NextResponse.json({message : "Email Send Failed"}, {status : 500})

    }
}