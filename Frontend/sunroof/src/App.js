import { useState } from "react";
import Address from "./components/Address";
import Appointment from "./components/Appointment";
import Bill from "./components/Bill";
import BillUpload from "./components/BillUpload";
import Confirm from "./components/Confirm";
import Contact from "./components/Contact";
import FinalConfirmation from "./components/FinalConfirmation";
import Header from "./components/Header";
import Messages from "./components/Messages";
import QualifedMessage from "./components/QualifedMessage";
import Qualified from "./components/Qualified";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Result from "./components/Result";
import Shedule from "./components/Shedule";
import SheduleTime from "./components/SheduleTime";


function App() {
  const [step,setStep] = useState(1)
  const [address,setAddress] = useState("")
  const [bill,setBill] = useState();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [appartment,setApparment] = useState("")
  const [property,setProperty] = useState("");
  const [family,setFamily] = useState("");
  const [credictScore,setCreditScore] = useState("");
  const [duration,setDuration] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [time,setTime] = useState();

  return (
    <div className="bg-cover min-h-screen " style={{ backgroundImage: `url("https://stella.demand-iq.com/media/backgrounds/e-AnGx1n-gtw8-unsplash_wAsqa2f.jpg")` }}>
      <Header />
      
      <div className="flex justify-center py-8">
        <div className="bg-white rounded-lg">
          {step===1?<Address address={address} setAddress={setAddress} step={step} setStep={setStep}/>:null}
          {step===2?<Bill setBill={setBill} step={step} setStep={setStep}/>:null}
          {step===3?<Messages step={step} setStep={setStep}/>:null}
          {step===4?<Result step={step} setStep={setStep}/>:null}
          {step===5?<Contact name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} step={step} setStep={setStep}/>:null}
          {step===6?<Qualified step={step} setStep={setStep}/>:null}
          {step===7?<Question1 address={address} setAddress={setAddress} appartment={appartment} setApparment={setApparment} step={step} setStep={setStep}/>:null}
          {step===8?<Question2 property={property} setProperty={setProperty} step={step} setStep={setStep}/>:null}
          {step===9?<Question3 family={family} setFamily={setFamily} step={step} setStep={setStep}/>:null}
          {step===10?<Question4 credictScore={credictScore} setCreditScore={setCreditScore} step={step} setStep={setStep}/>:null}
          {step===11?<Question5 duration={duration} setDuration={setDuration} step={step} setStep={setStep}/>:null}
          {step===12?<QualifedMessage step={step} setStep={setStep}/>:null}
          {step===13?<Shedule time={time} setTime={setTime} startDate={startDate} setStartDate={setStartDate} step={step} setStep={setStep}/>:null}
          {step===14?<SheduleTime step={step} setStep={setStep}/>:null}
          {step===15?<Confirm step={step} setStep={setStep}/>:null}
          {step===16?<Appointment step={step} setStep={setStep}/>:null}
          {step===17?<BillUpload step={step} setStep={setStep}/>:null}
          {step===18?<FinalConfirmation step={step} setStep={setStep}/>:null}
        </div>
      </div>
    </div>
  );
}

export default App;
