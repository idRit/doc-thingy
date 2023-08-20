<script>
  import General from "../components/General.svelte";
  import Housing from "../components/Housing.svelte";
  import Cormo from "../components/Cormo.svelte";
  import History from "../components/History.svelte";
  import Symptoms from "../components/Symptoms.svelte";
  import Fatigue from "../components/Fatigue.svelte";
  import Vaccination from "../components/Vaccination.svelte";
  import Misc from "../components/Misc.svelte";
  import Investigations from "../components/Investigations.svelte";
  import PhysicalActivities from "../components/PhysicalActivities.svelte";
  import RehabGoals from "../components/RehabGoals.svelte";
  import Crdq from "../components/Crdq.svelte";

  import Dashboard from "../screens/Dashboard.svelte";
  import { onMount } from "svelte";
  import { submit, handleSubmit } from "../stores/submitSync.store";
  import { createDetails, updateDetails } from "../util/requests";

  let toggleDashboard = true;
  let editPatient = {};
  let isEdit = false;

  const editCreatePatientDetails =
    (isEditable = false) =>
    (event) => {
      console.log("editPatientDetails: ", event.detail);
      editPatient = event.detail;
      isEdit = isEditable;
      toggleDashboard = false;
    };

  const attributesEdited = (event) => {
    console.log("attributesEdited: ", event?.detail);
    window.location.reload();
  };

  const submitHandler = () => {
    console.log("submitHandler");
    submit.update((val) => true);
  };

  handleSubmit.subscribe((event) => {
    if (!Object.keys(event).length) return;
    console.log({ isEdit });
    if (isEdit) {
      if (event.sections.length < 2) return;
      console.log("editing: ", editPatient.patient._id);
      Promise.all(event.sections.map(section => {
        updateDetails(section, editPatient.patient._id, event.data[section])
      })).then((result) => {
        console.log("res: ", result);
        attributesEdited();
        submit.update((val) => false);
      });
    } else {
      if (event.sections.length > 1) return;
      console.log("creating: ", event);
      createDetails(event.data.general).then((result) => {
        console.log("res: ", result);
        attributesEdited();
        submit.update((val) => false);
      });
    }
  });

  const close = () => {
    toggleDashboard = true;
    submit.update((val) => false);
    handleSubmit.update((val) => ({}));
  };
</script>

{#if toggleDashboard}
  <Dashboard
    on:edit={editCreatePatientDetails(true)}
    on:create={editCreatePatientDetails()}
  />
{:else}
  <button on:click={close}>Close</button>
  <div class="grid">
    <General
      {...editPatient.patient?.general}
      {isEdit}
      patientId={editPatient.patient?._id}
      on:edit={attributesEdited}
    />
    {#if isEdit && !toggleDashboard}
      <Housing
        {...editPatient.patient?.housing}
        {isEdit}
        patientId={editPatient.patient?._id}
        on:edit={attributesEdited}
      />
      <!-- <History />
    <Symptoms />
    <Fatigue />
    <Vaccination />
    <Misc />
    <Investigations />
    <PhysicalActivities />
    <RehabGoals />
    <Crdq /> -->
    {/if}
    <button on:click={submitHandler}>Submit</button>
  </div>
{/if}

<style>
  /* CSS for the "grid" class */
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Adjust the gap value as needed */
  }

  /* Add additional styling for form elements if needed */
  .grid label {
    display: block;
    margin-bottom: 10px;
  }

  .grid input[type="text"],
  .grid input[type="number"],
  .grid input[type="date"],
  .grid textarea,
  .grid select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .grid textarea {
    resize: vertical; /* Allow vertical resizing for textareas */
  }

  .grid button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .grid button:hover {
    background-color: #0056b3;
  }

  /* Add more custom styles as needed for individual form elements */
</style>
