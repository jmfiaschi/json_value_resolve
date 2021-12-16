window.BENCHMARK_DATA = {
  "lastUpdate": 1639682907213,
  "repoUrl": "https://github.com/jmfiaschi/json_value_resolve",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jm.fiaschi@gmail.com",
            "name": "jmfiaschi",
            "username": "jmfiaschi"
          },
          "committer": {
            "email": "jm.fiaschi@gmail.com",
            "name": "jmfiaschi",
            "username": "jmfiaschi"
          },
          "distinct": true,
          "id": "83ad1c49b90e411f16889264b3e280d115b6b793",
          "message": "fix(bench): typo",
          "timestamp": "2021-12-16T20:21:47+01:00",
          "tree_id": "5923ed7388495c50c84bd9406b11d59fed69b186",
          "url": "https://github.com/jmfiaschi/json_value_resolve/commit/83ad1c49b90e411f16889264b3e280d115b6b793"
        },
        "date": 1639682906802,
        "tool": "cargo",
        "benches": [
          {
            "name": "resolve/scalar_null",
            "value": 70,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_unsigned",
            "value": 57,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_signed",
            "value": 67,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float",
            "value": 100,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float_signed",
            "value": 97,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_bool",
            "value": 71,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_char",
            "value": 123,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}