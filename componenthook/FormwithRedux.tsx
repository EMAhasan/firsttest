import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { Name, updateFirstName,updateLastName } from '@/redux/personal/newname'


type FormData = {
    firstName: string
    lastName: string
  }
  
// Define types for props
// Define types for props
interface OwnProps {}

interface StateProps {
  // Define the types for the firstName and lastName props you want to map from the Redux store
  firstName: string;
  lastName: string;
}

interface DispatchProps {
  updateFirstName: (data: FormData) => void; // Adjust the type of data if needed
  updateLastName: (data: FormData) => void;
}

type Props = OwnProps & StateProps & DispatchProps;
export default function FormwithRedux(props: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })
  // Submit your data into Redux store
  //const onSubmit = (data) => props.updateAction(data)
  const onSubmit = (data: FormData) => props.updateFirstName(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="submit" />
    </form>
  )
}


// Connect your component with Redux using the connect function
const mapStateToProps = (state: { firstName: string; lastName: string }): StateProps => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
  };
};



