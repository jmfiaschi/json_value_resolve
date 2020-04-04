# json_value_resolve

[![Actions Status](https://github.com/jmfiaschi/json_value_resolve/workflows/CI/badge.svg)](https://github.com/jmfiaschi/json_value_resolve/actions)

Give an interface to resolve scalar to json_serde::Value.

## Installation

 ```Toml
[dependencies]
json_value_resolve = "0.1"
```

## Usage

Resolve scalar to serde_json::value:

```rust
extern crate json_value_resolve;

use json_value_resolve::Resolve;

{
    let string_value = "-00010000".to_string();
    let json_value = Value::resolve(string_value);
    assert_eq!(-10000, json_value.as_i64().unwrap());
}
```

## Bench

```Bash
Resolve/Bench Value::resolve(scalar_null).s
                        time:   [60.122 ns 60.184 ns 60.251 ns]
Found 11 outliers among 100 measurements (11.00%)
  3 (3.00%) high mild
  8 (8.00%) high severe

Resolve/Bench Value::resolve(scalar_unsigned).
                        time:   [49.827 ns 49.874 ns 49.928 ns]
Found 11 outliers among 100 measurements (11.00%)
  4 (4.00%) high mild
  7 (7.00%) high severe

Resolve/Bench Value::resolve(scalar_signed).
                        time:   [62.666 ns 62.953 ns 63.235 ns]
Found 13 outliers among 100 measurements (13.00%)
  6 (6.00%) high mild
  7 (7.00%) high severe

Resolve/Bench Value::resolve(scalar_float).
                        time:   [92.888 ns 94.866 ns 97.057 ns]
Found 9 outliers among 100 measurements (9.00%)
  6 (6.00%) high mild
  3 (3.00%) high severe

Resolve/Bench Value::resolve(scalar_float_signed).
                        time:   [86.905 ns 87.129 ns 87.370 ns]
Found 8 outliers among 100 measurements (8.00%)
  2 (2.00%) high mild
  6 (6.00%) high severe

Resolve/Bench Value::resolve(scalar_bool).
                        time:   [60.675 ns 61.789 ns 63.159 ns]
Found 16 outliers among 100 measurements (16.00%)
  6 (6.00%) high mild
  10 (10.00%) high severe

Resolve/Bench Value::resolve(scalar_char).
                        time:   [64.348 ns 65.135 ns 66.007 ns]
Found 4 outliers among 100 measurements (4.00%)
  4 (4.00%) high severe
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache](https://choosealicense.com/licenses/apache-2.0/)
[MIT](https://choosealicense.com/licenses/mit/)
