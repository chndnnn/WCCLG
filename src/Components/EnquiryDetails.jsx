import CustomDatePicker from "./CustomDatePicker";
import Input from "./Input";

const EnquiryDetails = () => {
  return (
    <div className="border border-red-500">
      <div className="w-full h-7"> Enquiry details</div>
      <div className="grid grid-cols-4 gap-3 p-2">
        <Input name={"Enquiry ID"} required={true} />
        <Input name={"Lead Id"} />
        <Input name={"Lead Created Date"} />
        <Input name={"Enquiry Created Date"} required={true} />
        <Input name={"Customer Name"} />
        <Input name={"Project Location"} />
        <Input name={"Bussinees Unit"} required={true} />
        <Input name={"Region Branch"} />
        <Input name={"Vertical"} />
        <Input name={"Sub vertical"} required={true} />
        <Input name={"Segment"} />
        <Input name={"Sub Segment"} />
        <Input name={"Approx Value(rs min)"} />
        <Input name={"Closure year"} />
        <Input name={"Exp closure PC"} />
        <Input name={"Exp closure wk"} />
        <Input name={"total sqft area"} />
        <Input type={"number"} name={"Seat no"} />
        <Input name={"Product manager"} />
        <CustomDatePicker label={"delivery Date"} />
        <Input name={"order Mode"} />
      </div>
    </div>
  );
};

export default EnquiryDetails;
