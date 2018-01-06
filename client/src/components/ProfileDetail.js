/*

Used to show detials on profile

FirstName, LastName, Birthday, UserName, Email, ACAID, Password

*/


import React from "react";

function UserProfile() {
  return (
    <div className="UserProfile">
    <form>
      <label>
        Name:
          <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
  )
}
















export default ProfileDetail;
