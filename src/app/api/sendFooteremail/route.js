import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request){
  console.log ("trying to send me");
  console.log(process.env.SMTP_SERVER);
  console.log(process.env.SMTP_USERNAME);
  console.log(process.env.SMTP_PASSWORD);
    const { businessname,customername,emailid,phonenumber,services,location,message } = await request.json();
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
            from: '"EDS" <subhransu@elevatedigitalservices.com>',
            to: 'satyajeet@elevatebs.com',
            subject: "🎉New submission to your contact form!",
            html:`
             <h3>Elevate Digital Services Form Details</h3>
             <li>Business Name : <strong>${businessname}</strong></li>
             <li>Customer Name : <strong>${customername}</strong></li>
             <li>Contact Number : <strong>${phonenumber}</strong></li>
             <li>Mail Id : <strong>${emailid}</strong></li>
             <li>Selected Service : <strong>${services}</strong></li>
             <li>Location : <strong>${location}</strong></li>
             <li>Message : <strong>${message}</strong></li>
            `
          }
    
          const result  = await transporter.sendMail(mailOption)
          console.log(result)

          return NextResponse.json({message : "Email Sent Sucessfully 🎉"},{status :200})
    } catch (error) {
      console.log(error)
        return NextResponse.json({message : "Email Send Failed"}, {status : 500})

    }
}