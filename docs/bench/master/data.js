window.BENCHMARK_DATA = {
  "lastUpdate": 1639684269998,
  "repoUrl": "https://github.com/jmfiaschi/json_value_resolve",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jm.fiaschi@gmail.com",
            "name": "jm.fiaschi",
            "username": "jmfiaschi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bbf8c7f73e7ca502bb49ddccd39d2169cdd5e70",
          "message": "feat(cicd): add semantic release (#1)",
          "timestamp": "2021-12-16T20:43:38+01:00",
          "tree_id": "7b88250ad5c140db962dd02ed7fabac21342b116",
          "url": "https://github.com/jmfiaschi/json_value_resolve/commit/2bbf8c7f73e7ca502bb49ddccd39d2169cdd5e70"
        },
        "date": 1639684269084,
        "tool": "cargo",
        "benches": [
          {
            "name": "resolve/scalar_null",
            "value": 60,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_unsigned",
            "value": 52,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_signed",
            "value": 61,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float",
            "value": 72,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float_signed",
            "value": 72,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_bool",
            "value": 60,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_char",
            "value": 90,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}