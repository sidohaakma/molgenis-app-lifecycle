<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">{{ variable }}</th>
        
        <th v-for="(cohort, index) in cohorts" :key="index">{{ cohort }}</th>
      </tr>
      
    </thead>
    <tbody>
      <tr>
        <td scope="col">Mean</td>
        <td>29.97</td>
        <td>23.40</td>
        <td>19.89</td>
        <td>30.10</td>
        <td>24.33</td>
        <td></td>
      </tr>
      <tr>
        <td scope="col">Std. Dev.</td>
        <td>4.43</td>
        <td>3.32</td>
        <td>4.55</td>
        <td>2.33</td>
        <td>4.89</td>
        <td></td>
      </tr>
      <tr>
        <td scope="col">Min</td>
        <td>15</td>
        <td>13</td>
        <td>19</td>
        <td>17</td>
        <td>16</td>
        <td></td>
      </tr>
      <tr>
        <td scope="col">Max</td>
        <td>47</td>
        <td>50</td>
        <td>44</td>
        <td>41</td>
        <td>42</td>
        <td></td>
      </tr>
      <tr>
        <td scope="col">Obs.</td>
        <td>102.444</td>
        <td>18.123</td>
        <td>10.012</td>
        <td>9.213</td>
        <td>11.123</td>
        <td></td>
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
    cohorts: {
      type: Array
    },
    summaries: {
      type: Object
    }
  }
}
</script>