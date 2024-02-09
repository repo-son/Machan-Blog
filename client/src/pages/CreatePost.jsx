import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput type='text' placeholder='Create a title' required id='title' className='flex-1'/>
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="Cooking">Cooking</option>
            <option value="Life style">Life style</option>
            <option value="Technology">Technology</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-700 p-3 border-dotted'>
          <FileInput type='file' accept='image/*'/>
          <Button type='button' gradientDuoTone='greenToBlue' size='sm' outline>Upload image</Button>
        </div>
        <ReactQuill theme='snow' placeholder='Type your mind...' className='h-72 mb-12' required/>
        <Button type='submit' gradientDuoTone='greenToBlue'>Publish</Button>
      </form>
    </div>
  )
}
