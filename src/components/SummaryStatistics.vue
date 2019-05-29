<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">{{ variable }}</th>
        
        <th>Mean</th>
        <th>Std. Dev.</th>
        <th>Min</th>
        <th>Max</th>
        <th>Obs.</th>
      </tr>
      
    </thead>
    <tbody>
      <tr>
        <td scope="col">{{ cohort }}</td>
        <td>29.97</td>
        <td>4.34</td>
        <td>15</td>
        <td>47</td>
        <td>102.442</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    variable: {
      type: String
    },
    cohort: {
      type: String
    },
    summaries: {
      type: Object
    }
  }
}
</script>