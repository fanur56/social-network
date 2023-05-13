import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
import {TextArea} from "Components/common/FormControls/FormControls";

type FormDataType = {
  newPostText: string
}

const maxLength15 = maxLengthCreator(15)

export const MyPosts = (props: MyPostsPropsType) => {

  //const newPostElement = React.createRef<HTMLTextAreaElement>()

  const onAddNewPost = (values: any) => {
    props.addNewPost(values.newPostText)
  }

  return (
    <div>
      <div>
        My posts
      </div>
      <AddNewPostFormRedux onSubmit={onAddNewPost}/>
      <div className={styles.posts}>
        New posts
        {props.profilePage.postsData.map((m: PostsDataType) => <Post key={m.id}
                                                                     message={m.message}
                                                                     likes={m.likes}/>)}
      </div>
    </div>
  )
}

function AddNewPostForm(props: InjectedFormProps<FormDataType>) {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={TextArea}
             name={"newPostText"}
             validate={[requiredField, maxLength15]}/>
    </div>
    <button>
      Add post
    </button>
  </form>
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

type MyPostsPropsType = {
  profilePage: PostsType
  addNewPost: (value: string) => void
}

export type PostsType = {
  postsData: Array<PostsDataType>
  profile: any | null
  status: string
}

export type PostsDataType = {
  id: number
  message: string
  likes: number
}