import React, { useRef } from 'react'
import Input from './Input'

const NewProject = ({onAdd}) => {
    let title = useRef()
    let description = useRef()
    let date = useRef()

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDate.trim() === ''
        ) {
            
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        });
    }

    return (
      <div className="w-[35rem] mt-16">
          <menu className="flex items-center justify-end gap-4 my-4">
              <li><button className="text-stone-600 duration-300 hover:text-stone-950">Cancel</button></li>
              <li><button onClick={handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
          </menu>
            <div>
              <Input type="text" ref={title} label="Title"/>
              <Input ref={description} label="Description" textarea/>
              <Input type="date" ref={date} label="Due Date"/>
          </div>
            
      </div>
  ) 
}

export default NewProject