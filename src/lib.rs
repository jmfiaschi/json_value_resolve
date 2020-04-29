extern crate serde_json;

use serde_json::Value;

/// Trait used to resolve scalar char into a json value with the good value.
///
/// A scalar type represents a single value.
/// Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.
/// You may recognize these from other programming languages. Let’s jump into how they work in Rust.
///
pub trait Resolve {
    /// Method use to resolve a scalar char into a json value.
    ///
    /// # Examples:
    ///
    /// ```ignore
    /// let string_value = "-00010000".to_string();
    /// let json_value = Value::resolve(string_value);
    /// assert_eq!(-10000, json_value.as_i64().unwrap());
    /// ```
    fn resolve(value: String) -> Value;
}

impl Resolve for serde_json::Value {
    fn resolve(scalar_char: String) -> Value {
        match scalar_char.parse::<u64>() {
            Ok(value) => return Value::Number(serde_json::Number::from(value)),
            Err(_) => (),
        };
        match scalar_char.parse::<i64>() {
            Ok(value) => return Value::Number(serde_json::Number::from(value)),
            Err(_) => (),
        };
        match scalar_char.parse::<f64>() {
            Ok(value) => {
                if let Some(value) = serde_json::Number::from_f64(value) {
                    return Value::Number(value);
                }
            }
            Err(_) => (),
        };
        match scalar_char.parse::<bool>() {
            Ok(value) => return Value::Bool(value),
            Err(_) => (),
        };
        match scalar_char.as_ref() {
            "null" => return Value::Null,
            _ => (),
        };
        match serde_json::from_str(scalar_char.as_str()) {
            Ok(value) => return value,
            _ => (),
        }

        Value::String(scalar_char)
    }
}

#[cfg(test)]
mod serde_json_value_updater_test {
    use super::*;
    #[test]
    fn it_should_resolve_scalar_null() {
        let string_value = "null".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!((), json_value.as_null().unwrap());
    }
    #[test]
    fn it_should_resolve_scalar_unsigned_number() {
        let string_value = "10".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!(10, json_value.as_u64().unwrap());
    }
    #[test]
    fn it_should_resolve_scalar_signed_number() {
        let string_value = "-00010000".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!(-10000, json_value.as_i64().unwrap());
    }
    #[test]
    fn it_should_resolve_scalar_float() {
        let string_value = "10.50".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!(10.50, json_value.as_f64().unwrap());
    }
    #[test]
    fn it_should_resolve_scalar_signed_float_number() {
        let string_value = "-10.50".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!(-10.50, json_value.as_f64().unwrap());
    }
    #[test]
    fn it_should_resolve_string_boolean() {
        let string_value = "true".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!(true, json_value.as_bool().unwrap());
    }
    #[test]
    fn it_should_resolve_json_value_string() {
        let string_value = "my string".to_string();
        let json_value = Value::resolve(string_value);
        assert_eq!("my string", json_value.as_str().unwrap());
    }
    #[test]
    fn it_should_resolve_json_value_object() {
        let string_object = r#"{"field":"value"}"#.to_string();
        let json_value = Value::resolve(string_object);
        assert_eq!(r#"{"field":"value"}"#, json_value.to_string());
    }
}
