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
</script>

<div class="grid">
  <General />
  <Housing />
  <Cormo />
  <History />
  <Symptoms />
  <Fatigue />
  <Vaccination />
  <Misc />
  <Investigations />
  <PhysicalActivities />
  <RehabGoals />
  <Crdq />
</div>

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
