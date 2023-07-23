<h1>General Section</h1>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" /><br />

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" /><br />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" /><br />

  <label for="height">Height (in cm):</label>
  <input type="number" id="height" name="height" /><br />

  <label for="weight">Weight (in kg):</label>
  <input type="number" id="weight" name="weight" /><br />

  <label for="bmi">BMI:</label>
  <input type="number" id="bmi" name="bmi" /><br />

  <label for="sex">Sex:</label>
  <select id="sex" name="sex">
    <option value="m">Male</option>
    <option value="f">Female</option>
    <option value="o">Other</option>
  </select><br />

  <label for="address">Address:</label>
  <input type="text" id="address" name="address" /><br />

  <label for="telephone_number">Telephone Number:</label>
  <input type="text" id="telephone_number" name="telephone_number" /><br />

  <label for="mobile_number">Mobile Number:</label>
  <input type="text" id="mobile_number" name="mobile_number" /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />

  <label for="occupation">Occupation:</label>
  <input type="text" id="occupation" name="occupation" /><br />

  <label for="maritial_status">Marital Status:</label>
  <select id="maritial_status" name="maritial_status">
    <option value="single">Single</option>
    <option value="married">Married</option>
    <option value="divorced">Divorced</option>
    <option value="widowed">Widowed</option>
  </select><br />

  <label for="referred_doctor">Referred Doctor:</label>
  <input type="text" id="referred_doctor" name="referred_doctor" /><br />

  <input type="submit" value="Submit" />
</form>

<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
</style>
