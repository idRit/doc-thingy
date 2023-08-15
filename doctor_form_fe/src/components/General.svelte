<script>
  export let name = "";
  export let dob = "";
  export let age = "";
  export let height = "";
  export let weight = "";
  export let bmi = "";
  export let sex = "m"; // Default to 'm' (male)
  export let address = "";
  export let telephone_number = "";
  export let mobile_number = "";
  export let email = "";
  export let occupation = "";
  export let marital_status = "single"; // Default to 'single'
  export let referred_doctor = "";
  export let isEdit = false;
  export let patientId = "";

  import { createDetails } from "../util/requests";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // Function to handle form submission
  function handleSubmit() {
    const details = {
      general: {
        name,
        dob,
        age,
        height,
        weight,
        bmi,
        sex,
        address,
        telephone_number,
        mobile_number,
        email,
        occupation,
        marital_status,
        referred_doctor,
      },
    };

    if (isEdit) {
      updateDetails("general", patientId, details.general).then((result) => {
        console.log("res: ", result);
        dispatch("edit", {
          result,
        });
      });
    } else
      createDetails(details.general).then((result) => {
        console.log("res: ", result);
        dispatch("edit", {
          result,
        });
      });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} />
  </label>

  <label>
    Date of Birth:
    <input type="date" bind:value={dob} />
  </label>

  <label>
    Age:
    <input type="number" bind:value={age} />
  </label>

  <label>
    Height (cm):
    <input type="number" bind:value={height} />
  </label>

  <label>
    Weight (kg):
    <input type="number" bind:value={weight} />
  </label>

  <label>
    BMI:
    <input type="number" bind:value={bmi} />
  </label>

  <label>
    Sex:
    <select bind:value={sex}>
      <option value="m">Male</option>
      <option value="f">Female</option>
      <option value="o">Other</option>
    </select>
  </label>

  <label>
    Address:
    <textarea bind:value={address} />
  </label>

  <label>
    Telephone Number:
    <input type="tel" bind:value={telephone_number} />
  </label>

  <label>
    Mobile Number:
    <input type="tel" bind:value={mobile_number} />
  </label>

  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>

  <label>
    Occupation:
    <input type="text" bind:value={occupation} />
  </label>

  <label>
    Marital Status:
    <select bind:value={marital_status}>
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="divorced">Divorced</option>
      <option value="widowed">Widowed</option>
    </select>
  </label>

  <label>
    Referred Doctor:
    <input type="text" bind:value={referred_doctor} />
  </label>

  <button type="submit">Submit</button>
</form>
