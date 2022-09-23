import React from 'react'

type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}

const Person = (props: PersonProps) => {
  return (
    <div>
        {props.name.firstName} {props.name.lastName}
    </div>
  )
}

export default Person