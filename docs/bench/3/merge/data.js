window.BENCHMARK_DATA = {
  "lastUpdate": 1639757043709,
  "repoUrl": "https://github.com/jmfiaschi/json_value_resolve",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "jmfiaschi",
            "username": "jmfiaschi"
          },
          "committer": {
            "name": "jmfiaschi",
            "username": "jmfiaschi"
          },
          "id": "8e3bc7a0b55c384520e561942d2adc5b03c3dd48",
          "message": "fix(cicd): update version",
          "timestamp": "2021-12-16T21:53:45Z",
          "url": "https://github.com/jmfiaschi/json_value_resolve/pull/3/commits/8e3bc7a0b55c384520e561942d2adc5b03c3dd48"
        },
        "date": 1639757042667,
        "tool": "cargo",
        "benches": [
          {
            "name": "resolve/scalar_null",
            "value": 53,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_unsigned",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_signed",
            "value": 54,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float",
            "value": 66,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_float_signed",
            "value": 65,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_bool",
            "value": 54,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "resolve/scalar_char",
            "value": 82,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}