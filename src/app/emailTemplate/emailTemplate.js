
const emailTemplate = (bname,fname,emailid,pnumber,service) => {
    return (
      <>
      <h3>{fname} has submitted the contact form</h3>
      <p>Business Name : - {bname}</p>
      <p>Name : - {fname}</p>
      <p>Contact Number : - {pnumber}</p>
      <p>Mail Id : - {emailid}</p>
      <p>Selected Service : - {service}</p>
      </>
    )
  }
  
  export default emailTemplate