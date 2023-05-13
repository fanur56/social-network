import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {FormDataType} from "Components/Dialogs/Dialogs";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
import {TextArea} from "Components/common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
  return <form onSubmit={props.handleSubmit} action="">
    <div>
      <Field component={TextArea}
             validate={[requiredField, maxLength50]}
             name={"newMessageBody"}
             placeholder={"Enter your message"}/>
      <button>Add message</button>
    </div>
  </form>
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)