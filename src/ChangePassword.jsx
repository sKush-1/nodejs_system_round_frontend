import axios from 'axios';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ChangePassword() {
  const forgotToken = useParams().token;
  const [newPassword, setnewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const changePassword =  axios.post("http://localhost:8000/api/v1/users/reset-password",{newPassword,confirmPassword,forgotToken})
    .then(data => alert("password changed successfully"))
    .catch(error => console.log(error))
  }



  return (
    <>
     <form onSubmit={handleSubmit}>
      <label>New Password:
        <input type="text" 
        onChange={(e) => setnewPassword(e.target.value)}
        />
      </label>
      <br>
      </br>

      <label>Confirm Password:
        <input type="text" 
        onChange={(e) => setConfirmPassword(e.target.value)}

        />


      </label>

      <input type="submit" />
      
    </form>
    </>
  )
}

export default ChangePassword
