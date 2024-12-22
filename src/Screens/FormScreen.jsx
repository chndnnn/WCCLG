import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import Checkbox from "../Components/Checkbox";

export default function FormScreen(){
    return(
        <div>
            <div className="flex border shadow-lg flex-row justify-start gap-5 m-4 p-4 flex-wrap">
         <Dropdown name={"Transaction Type"} data={[]} width={32} />
         <Dropdown name={"Fin ear"} data={[]}  width={32}/>
         <Dropdown name={"Quarter"} data={[]} width={32} />
         <Dropdown name={"PC"} data={[]} width={32} />
         <Dropdown name={"Week "} data={[]}  width={32}/>
        <Input name={'Customer Name'} margin={25}/>
        <Input name={'Order Number'} margin={24}/>  
        <Input name={'Lead Number'} margin={24}/>         
        <Checkbox label={'INF'}  margin={24}/>
        <Checkbox label={'PROD Approved Date'}  margin={24}/>
        <Checkbox  label={'RM Approved Date'}   margin={24}/>
        </div>
        <div>
        <div className="flex shadow-lg flex-row justify-start gap-5 m-4 p-4 flex-wrap">
         <Dropdown name={"Status"} data={[]} width={32} />
         <Dropdown name={"Business Unit"} data={[]}  width={32}/>
         <Dropdown name={"Vertical"} data={[]} width={32} />
         <Dropdown name={"Region"} data={[]} width={32} />
         <Dropdown name={"Branch "} data={[]}  width={32}/>
         <Dropdown name={"Sub Vertical"} data={[]} width={32} />
         <Dropdown name={"Sub Segment "} data={[]} width={32} />
         <Dropdown name={"Segement "} data={[]}  width={32}/> 
        </div>
        </div>
        </div>
    )
}