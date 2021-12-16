# json_value_resolve

[![Linter](https://github.com/jmfiaschi/json_value_resolve/workflows/Lint/badge.svg)](https://github.com/jmfiaschi/json_value_resolve/actions/workflows/lint.yml)
[![Actions Status](https://github.com/jmfiaschi/json_value_resolve/workflows/CI/badge.svg)](https://github.com/jmfiaschi/json_value_resolve/actions/workflows/ci.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Give an interface to resolve scalar to json_serde::Value.

## Installation

 ```Toml
[dependencies]
json_value_resolve = "0.2"
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

{
  let string_value = "-10.50".to_string();
  let json_value = Value::resolve(string_value);
  assert_eq!(-10.50, json_value.as_f64().unwrap());
}

{
  let string_value = "true".to_string();
  let json_value = Value::resolve(string_value);
  assert_eq!(true, json_value.as_bool().unwrap());
}

{
  let string_object = r#"{"field":"value"}"#.to_string();
  let json_value = Value::resolve(string_object);
  assert_eq!(r#"{"field":"value"}"#, json_value.to_string());
}

{
  let string_value = "null".to_string();
  let json_value = Value::resolve(string_value);
  assert_eq!((), json_value.as_null().unwrap());
}
```

## Useful link

* [Benchmark report](https://jmfiaschi.github.io/json_value_resolve/bench/main/)
* [Package](https://crates.io/crates/json_value_resolve)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache](https://choosealicense.com/licenses/apache-2.0/)
[MIT](https://choosealicense.com/licenses/mit/)
