import React from 'react'

export default function Alert(props) {
    const capitalise=(word)=>{
        word=word.toLowerCase()
        let cap=word.charAt(0).toUpperCase();
        return cap+word.slice(1);
    }
  return (
    (props.alert) && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
